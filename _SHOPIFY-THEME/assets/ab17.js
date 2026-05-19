/**
* A/B Test: NMN|PP|AB17 - Create a UGC section showing real people using the product
*
* This script adds a UGC section with videos after the accordion section on product pages
* Usage: Copy and paste this entire function into the browser console and execute it
*/


(function() {
 'use strict';


 console.log('🚀 Initializing NMN|PP|AB17 - UGC Section A/B Test');


 // Main initialization function
 function init() {
   console.log('📍 Running NMN|PP|AB17 initialization');


   // Check if we're on a product page
   if (!window.location.pathname.includes('/products/')) {
     console.warn('⚠️ Not a product page. Test will not run.');
     return;
   }


 // Check if UGC section already exists
 if (document.querySelector('.nmn-ugc-section')) {
   console.warn('⚠️ UGC section already exists. Removing old version...');
   document.querySelector('.nmn-ugc-section').remove();
 }


 // Video data with actual Shopify CDN videos
 const videos = [
   {
     videoSrc: 'https://cdn.shopify.com/videos/c/o/v/496f90728da24dd7a11908e136233942.mp4',
     poster: 'https://cdn.shopify.com/s/files/1/2556/8900/files/video1.png?v=1758275083',
     quote: '"Allah\'s love and compassion is always there"',
     className: 'eg-videoFirst'
   },
   {
     videoSrc: 'https://cdn.shopify.com/videos/c/o/v/23e4325612614821929f8cd855be94bb.mp4',
     poster: 'https://cdn.shopify.com/s/files/1/2556/8900/files/video2.png?v=1758275082',
     quote: '"Each piece has a meaningful design"',
     className: 'eg-videoTwo'
   },
   {
     videoSrc: 'https://cdn.shopify.com/videos/c/o/v/93068f1634a249efbdfd75fe6ff62d9f.mp4',
     poster: 'https://cdn.shopify.com/s/files/1/2556/8900/files/video3.png?v=1758275082',
     quote: '"They\'re beautiful, long lasting and waterproof"',
     className: 'eg-videoThree'
   },
   {
     videoSrc: 'https://cdn.shopify.com/videos/c/o/v/b3e7e0100b8d4d27a5909437881167f4.mp4',
     poster: 'https://cdn.shopify.com/s/files/1/2556/8900/files/video4.png?v=1758275081',
     quote: '"Beautiful, Beautiful! I love the details, that\'s absolutely stunning"',
     className: 'eg-videoFour'
   },
   {
     videoSrc: 'https://cdn.shopify.com/videos/c/o/v/d60158c56c1241038a68130dfe9ba821.mp4',
     poster: 'https://cdn.shopify.com/s/files/1/2556/8900/files/video5.png?v=1758275082',
     quote: '"Buying jewellery and you know where your money is going, to and for a better cause"',
     className: 'eg-videoFive'
   }
 ];


 // Generate star rating HTML (4.7 stars)
 function generateStars(rating = 4.7) {
   const fullStars = Math.floor(rating);
   const hasHalfStar = rating % 1 !== 0;
   let starsHTML = '';


   for (let i = 0; i < 5; i++) {
     if (i < fullStars) {
       // Full star
       starsHTML += `
         <div style="width: 16px; height: 16px; position: relative; flex: none; order: ${i};">
           <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M8 1.5L10.12 5.82L15 6.55L11.5 9.95L12.24 14.8L8 12.56L3.76 14.8L4.5 9.95L1 6.55L5.88 5.82L8 1.5Z" fill="#9F755B"/>
           </svg>
         </div>
       `;
     } else if (i === fullStars && hasHalfStar) {
       // Half star with proper overlay
       starsHTML += `
         <div style="width: 16px; height: 16px; position: relative; flex: none; order: ${i};">
           <!-- Background empty star -->
           <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style="position: absolute; top: 0; left: 0;">
             <path d="M8 1.5L10.12 5.82L15 6.55L11.5 9.95L12.24 14.8L8 12.56L3.76 14.8L4.5 9.95L1 6.55L5.88 5.82L8 1.5Z" fill="#DEDEDE"/>
           </svg>
           <!-- Half star overlay with clip-path -->
           <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style="position: absolute; top: 0; left: 0; clip-path: inset(0 50% 0 0);">
             <path d="M8 1.5L10.12 5.82L15 6.55L11.5 9.95L12.24 14.8L8 12.56L3.76 14.8L4.5 9.95L1 6.55L5.88 5.82L8 1.5Z" fill="#9F755B"/>
           </svg>
         </div>
       `;
     } else {
       // Empty star
       starsHTML += `
         <div style="width: 16px; height: 16px; position: relative; flex: none; order: ${i};">
           <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M8 1.5L10.12 5.82L15 6.55L11.5 9.95L12.24 14.8L8 12.56L3.76 14.8L4.5 9.95L1 6.55L5.88 5.82L8 1.5Z" fill="#DEDEDE"/>
           </svg>
         </div>
       `;
     }
   }


   return starsHTML;
 }


 // Generate video card HTML
 function generateVideoCard(video, index) {
   return `
     <div class="nmn-video-card" style="
       display: flex;
       flex-direction: column;
       align-items: flex-start;
       padding: 0px;
       gap: 12px;
       flex: 0 0 250px;
       max-width: 250px;
       min-width: 250px;
       width: 250px;
       height: 548px;
       border: 1px solid #D7D7D7;
       border-radius: 0px;
       position: relative;
       flex-shrink: 0;
     ">
       <!-- Video Container -->
       <div class="nmn-videoContainer" style="
         width: 250px;
         height: 432px;
         position: relative;
         cursor: pointer;
         background: #000;
         border-radius: 0px;
         flex-shrink: 0;
         overflow: hidden;
       ">
         <video
           class="${video.className} the-video"
           playsinline
           webkit-playsinline
           poster="${video.poster}"
           preload="metadata"
           style="
             width: 250px;
             height: 432px;
             object-fit: cover;
             display: block;
           "
         >
         <source src="${video.videoSrc}" type="video/mp4">
         </video>
         <!-- Play Icon -->
         <img
           src="https://cdn.shopify.com/s/files/1/2556/8900/files/playIcon.png?v=1757396906"
           class="nmn-play"
           style="
             position: absolute;
             width: 56px;
             height: 56px;
             left: 50%;
             top: 50%;
             transform: translate(-50%, -50%);
             cursor: pointer;
             transition: opacity 0.3s ease;
           "
         />
       </div>


       <!-- Video Info -->
       <div class="nmn-video-info" style="
         display: flex;
         flex-direction: column;
         align-items: center;
         padding: 0px 16px;
         gap: 8px;
         width: 100%;
         box-sizing: border-box;
         padding: 15px;
       ">
         <!-- Stars -->
         <div class="nmn-stars-small" style="
           display: flex;
           flex-direction: row;
           align-items: flex-start;
           padding: 0px;
           gap: 6px;
         ">
           ${generateStars(5)}
         </div>


         <!-- Quote -->
         <span style="
           font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
           font-style: normal;
           font-weight: 500;
           font-size: 14px;
           line-height: 140%;
           letter-spacing: 0.02em;
           color: #000000;
           text-align: center;
         ">
           ${video.quote}
         </span>
       </div>
     </div>
   `;
 }


 // Create the UGC Section HTML
 const ugcSectionHTML = `
   <div class="nmn-ugc-section" style="
     display: flex;
     flex-direction: column;
     align-items: center;
     padding: 0px;
     gap: 48px;
     width: 100%;
     max-width: 1440px;
     margin: 0 auto;
   ">
     <!-- Headline -->
     <div style="
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
       padding: 0px;
       gap: 12px;
       max-width: 610px;
       width: 100%;
     ">
       <!-- Title -->
       <div style="
         font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
         font-style: normal;
         font-weight: 400;
         font-size: 24px;
         line-height: 160%;
         text-align: center;
         letter-spacing: 0.02em;
         color: #1C1B1B;
         padding: 0px 35px 0px 35px;
       ">
         Over <span style="color: #9F755B;">2 Million Pieces</span> Sold Across 150+ Countries
       </div>


       <!-- Rating -->
       <div style="
         display: flex;
         flex-direction: column;
         align-items: center;
         padding: 0px;
         gap: 8px;
       ">
         <!-- Stars and 4.7 -->
         <div style="
           display: flex;
           flex-direction: row;
           align-items: center;
           padding: 0px;
           gap: 8px;
         ">
           <!-- Star Icons -->
           <div style="
             display: flex;
             flex-direction: row;
             align-items: flex-start;
             padding: 0px;
             gap: 4px;
           ">
             ${generateStars(4.7)}
           </div>


           <!-- 4.7 Text -->
           <div style="
             font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
             font-style: normal;
             font-weight: 400;
             font-size: 14px;
             line-height: 160%;
             letter-spacing: 0.04em;
             color: #2C3E50;
           ">
             4.7
           </div>
         </div>


         <!-- Review Count -->
         <div style="
           font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
           font-style: normal;
           font-weight: 400;
           font-size: 14px;
           line-height: 160%;
           letter-spacing: 0.04em;
           color: #2C3E50;
         ">
           Across over 23,000 reviews
         </div>
       </div>
     </div>


     <!-- Videos Container -->
     <div class="nmn-videos-container" style="
       display: flex;
       flex-direction: row;
       align-items: flex-start;
       justify-content: center;
       padding: 0px 64px;
       gap: 24px;
       width: 100%;
       max-width: 1440px;
       margin-bottom: 50px;
     ">
       ${videos.map((video, index) => generateVideoCard(video, index)).join('')}
     </div>
   </div>


   <!-- Mobile Responsive Styles -->
   <style>
     .nmn-video-card.nmn-videoPlay .nmn-play {
       opacity: 0;
       pointer-events: none;
     }


     /* Desktop Styles (default) */
     @media (min-width: 769px) {
       .nmn-ugc-section {
         padding: 0px !important;
         gap: 48px !important;
         max-width: 1440px !important;
         margin: 0 auto 80px auto !important;
       }


       .nmn-videos-container {
         padding: 0px 64px !important;
         gap: 24px !important;
         justify-content: center !important;
         max-width: 1440px !important;
         overflow-x: hidden !important;
         flex-wrap: nowrap !important;
       }


       .nmn-video-card {
         flex: 0 0 250px !important;
         max-width: 250px !important;
         min-width: 250px !important;
         width: 250px !important;
         height: 570px !important;
       }


       .nmn-video-card .nmn-videoContainer {
         height: 432px !important;
       }


       .nmn-video-card .nmn-video-info {
         padding: 15px !important;
       }
     }


     @media (max-width: 768px) {
       .nmn-ugc-section {
         padding: 0px 0px !important;
         gap: 32px !important;
         margin-left: -20px !important;
         margin-right: -20px !important;
         width: calc(100% + 40px) !important;
       }


       .nmn-videos-container {
         padding: 0px 0px 0px 20px !important;
         gap: 8px !important;
         justify-content: flex-start !important;
         overflow-x: auto !important;
         -webkit-overflow-scrolling: touch !important;
       }


       .nmn-video-card {
         max-width: 250px !important;
         min-width: 250px !important;
         height: 470px !important;
         flex: 0 0 200px !important;
       }


       .nmn-video-card .nmn-videoContainer {
         height: 355px !important;
       }


       .nmn-video-card .nmn-video-info {
         padding: 8px 12px !important;
       }


       .nmn-video-card .nmn-video-info span {
         font-size: 12px !important;
       }
     }


     /* Hide scrollbar on desktop */
     @media (min-width: 769px) {
       .nmn-videos-container::-webkit-scrollbar {
         display: none;
       }


       .nmn-videos-container {
         -ms-overflow-style: none;
         scrollbar-width: none;
       }
     }


     /* Show scrollbar on mobile */
     @media (max-width: 768px) {
       .nmn-videos-container::-webkit-scrollbar {
         height: 6px;
       }


       .nmn-videos-container::-webkit-scrollbar-track {
         background: #f1f1f1;
       }


       .nmn-videos-container::-webkit-scrollbar-thumb {
         background: #9F755B;
         border-radius: 3px;
       }


       .nmn-videos-container::-webkit-scrollbar-thumb:hover {
         background: #7d5a46;
       }
     }
   </style>
 `;


 // Detect if mobile or desktop
 const isMobile = window.innerWidth <= 768;


 if (isMobile) {
   // Mobile: Insert AFTER the accordion
   const mobileTarget = document.querySelector('.easyslider-container.easyslider-widget-AekFyQjZhWnRlc3ZlZ__6570643953009571346');


   if (!mobileTarget) {
     console.error('❌ Mobile target element (accordion) not found. The page structure may have changed.');
     return;
   }


   mobileTarget.insertAdjacentHTML('afterend', ugcSectionHTML);
   console.log('📱 Mobile: UGC section inserted after accordion');
 } else {
   // Desktop: Insert BEFORE the "Customers ask" section
   console.log('🔍 Searching for desktop target element...');


   let desktopTarget = null;


   // Strategy 1: Try to find "Customers ask, we answer" section by text content
   const allHeadings = Array.from(document.querySelectorAll('h2, h3, .h2, .h3, [class*="heading"], [class*="title"]'));
   console.log('📋 Found', allHeadings.length, 'potential heading elements');


   for (const heading of allHeadings) {
     const text = heading.textContent.trim().toLowerCase();
     if (text.includes('customers ask') || text.includes('customer ask') || text.includes('questions')) {
       console.log('✅ Found "Customers ask" section by heading text:', heading.textContent.trim());
       // Find the parent section/container
       desktopTarget = heading.closest('section, div[id*="template"], div[class*="section"], .shopify-section');
       if (desktopTarget) {
         console.log('✅ Found parent container for insertion');
         break;
       }
     }
   }


   // Strategy 2: Try ID-based selectors with dynamic ID support
   if (!desktopTarget) {
     console.log('⚠️ Strategy 1 failed, trying ID-based selectors...');


     // Try original ID first
     desktopTarget = document.querySelector('#DP--template--18554322092219__c4aa895b-fdc2-4924-b8ce-d5ea5460b66f');


     if (desktopTarget) {
       console.log('✅ Found via original ID');
     } else {
       // Try any element with DP--template pattern
       desktopTarget = document.querySelector('[id^="DP--template"]');
       if (desktopTarget) {
         console.log('✅ Found via DP--template pattern:', desktopTarget.id);
       }
     }
   }


   // Strategy 3: Look for accordion section and use it for desktop too (as fallback)
   if (!desktopTarget) {
     console.log('⚠️ Strategy 2 failed, using accordion as fallback...');
     desktopTarget = document.querySelector('.easyslider-container.easyslider-widget-AekFyQjZhWnRlc3ZlZ__6570643953009571346');
     if (desktopTarget) {
       console.log('✅ Found accordion section as fallback');
     }
   }


   if (!desktopTarget) {
     console.error('❌ Desktop target element not found. The page structure may have changed.');
     console.log('🔍 Debugging info:');
     console.log('  - Total elements on page:', document.querySelectorAll('*').length);
     console.log('  - Headings found:', allHeadings.length);
     console.log('  - Current URL:', window.location.href);
     console.log('  - Window width:', window.innerWidth);
     return;
   }


   desktopTarget.insertAdjacentHTML('beforebegin', ugcSectionHTML);
   console.log('💻 Desktop: UGC section inserted before element:', desktopTarget.id || desktopTarget.className.substring(0, 50));
 }


 // Add click handlers for video play/pause
 const videosContainer = document.querySelector('.nmn-videos-container');


 if (videosContainer) {
   videosContainer.addEventListener('click', function(e) {
     const card = e.target.closest('.nmn-video-card');
     if (!card) return;


     const video = card.querySelector('video');
     if (!video) return;


     // Toggle play/pause
     if (card.classList.contains('nmn-videoPlay')) {
       video.pause();
       card.classList.remove('nmn-videoPlay');
     } else {
       // Pause all other videos
       document.querySelectorAll('.nmn-video-card video').forEach(v => {
         v.pause();
         v.closest('.nmn-video-card').classList.remove('nmn-videoPlay');
       });


       // Play the clicked video
       video.play();
       card.classList.add('nmn-videoPlay');


       // Remove the play class when video ends
       video.onended = function() {
         card.classList.remove('nmn-videoPlay');
       };
     }
   });
 }


   console.log('✅ UGC Section successfully added to product page!');
   console.log('📊 Track this variation in your analytics as: NMN|PP|AB17');


   // Track the variant activation (integrate with your analytics)
   if (window.dataLayer) {
     window.dataLayer.push({
       'event': 'ab_test_variant',
       'test_name': 'NMN_PP_AB17',
       'variant': 'ugc_section',
       'page_type': 'product'
     });
   }
 }


 // Wait for DOM to be fully loaded before initializing
 if (document.readyState === 'loading') {
   console.log('⏳ Waiting for DOM to load...');
   document.addEventListener('DOMContentLoaded', init);
 } else {
   console.log('✅ DOM already loaded, initializing immediately');
   init();
 }


})();