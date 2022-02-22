/*
    Cookie Consent Notice Type h
    Adapted from https://github.com/manucaralmo/GlowCookies
*/

class CookieConsentNotice {
  constructor() {
    // Cookies banner
    this.banner = undefined
    // Config
    this.config = undefined
    this.tracking = undefined
    // DOM ELEMENTS
    this.PreBanner = undefined
    this.Cookies = undefined
    this.DOMbanner = undefined
    // Li items that show icons and assciated text
    this.LiIdentifiers = undefined
    this.LiBrowsingHistory = undefined
    this.LiLocation = undefined
    this.LiDeviceDetails = undefined
  }

  render() {
    this.addCss()
    this.createDOMElements()
    this.checkStatus()
  }

  addCss() {
    const stylesheet = document.createElement('link');
    stylesheet.setAttribute('rel', 'stylesheet');
    stylesheet.setAttribute('href', 'ccn-type-h.css');
    document.head.appendChild(stylesheet);
  }

  createDOMElements() {
    // COOKIES BUTTON
    this.PreBanner = document.createElement("div");
    this.PreBanner.innerHTML = `<button type="button" id="prebannerBtn" class="prebanner cookieConsentNotice__${this.config.position} cookieConsentNotice__${this.config.border} animation" style="color: ${this.banner.manageCookies.color}; background-color: ${this.banner.manageCookies.background};">
                                    <svg fill="currentColor" style="margin-right: 2px; margin-top: 2px; vertical-align: text-top;" height="26px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.972 44">
                                    <path id="cookie-device" d="M3,44a3,3,0,0,1-3-3V3A3,3,0,0,1,3,0H25a3,3,0,0,1,3,3V8.944l-.645-.117-.019,0a6.092,6.092,0,0,0-1.054-.093A5.95,5.95,0,0,0,24,9.185V6H4V38H18.127a6.005,6.005,0,0,0,5.227,3.863l.674.044.419.535a6.011,6.011,0,0,0,1.541,1.391A2.987,2.987,0,0,1,25,44Zm31.07-2.521-.6-.272a3,3,0,0,0-2.46,0l-.6.272a3,3,0,0,1-3.593-.887l-.419-.535a3.005,3.005,0,0,0-2.171-1.145l-.673-.043a3,3,0,0,1-2.758-2.448l-.13-.7a3.01,3.01,0,0,0-1.382-2.011l-.6-.369a3,3,0,0,1-1.3-3.435l.215-.7a3.012,3.012,0,0,0-.292-2.414l-.374-.628a3,3,0,0,1,.441-3.642L17.87,22a3,3,0,0,0,.859-2.277L18.689,19a3,3,0,0,1,2.087-3.029l.657-.209a3,3,0,0,0,1.828-1.627l.287-.636a3,3,0,0,1,2.733-1.767,3.134,3.134,0,0,1,.536.048l.654.119a3.1,3.1,0,0,0,.534.048,3.011,3.011,0,0,0,1.852-.639l.527-.412a3,3,0,0,1,3.7,0l.526.412a3.019,3.019,0,0,0,1.853.639A3.087,3.087,0,0,0,37,11.9l.653-.119a3.142,3.142,0,0,1,.536-.048A3,3,0,0,1,40.923,13.5l.286.636a3.006,3.006,0,0,0,1.828,1.627l.658.209A3,3,0,0,1,45.782,19l-.041.726A3.006,3.006,0,0,0,46.6,22l.507.514a3,3,0,0,1,.442,3.642l-.374.628a3.011,3.011,0,0,0-.292,2.414l.214.7a3,3,0,0,1-1.3,3.435l-.6.369a3.015,3.015,0,0,0-1.382,2.011l-.13.7a3,3,0,0,1-2.758,2.448l-.672.043a3.012,3.012,0,0,0-2.171,1.145l-.419.535a3,3,0,0,1-3.593.887Zm2.667-8.036h3v-3h-3Zm-12,0h3v-3h-3Zm6-6h3v-3h-3Zm-6-6h3v-3h-3Zm12,0h3v-3h-3Z"/>
                                    </svg>${this.banner.manageCookies.text}</button>`;
    this.PreBanner.style.display = "none";
    document.body.appendChild(this.PreBanner);

    // COOKIES BANNER
    this.Cookies = document.createElement("div");
    this.Cookies.innerHTML = `<div 
                                      id="cookieConsentNotice-banner" 
                                      class="cookieConsentNotice__banner cookieConsentNotice__${this.config.border} cookieConsentNotice__${this.config.position}"
                                      style="background-color: ${this.banner.background};"
                                  >
                                      <h3 style="color: ${this.banner.color};">${this.banner.heading}</h3>
                                      <p style="color: ${this.banner.color};">
                                          ${this.banner.description} 
                                          <a 
                                              href="${this.banner.link}"
                                              target="_blank" 
                                              class="read__more"
                                              style="color: ${this.banner.color};"
                                          >
                                              ${this.banner.linkText}
                                          </a>
                                      </p>
                                  <div class="icon__section">
                                      <div class="icon__list__container">
                                          <ul class="icon__list">
                                          <li class="header">Data Collected</li>
                                          <li id="liDeviceDetails"><span class="material-icons">tablet_mac</span>${this.banner.deviceDetailsIcon.text}</li>
                                          <li id="liIdentifiers"><span class="material-icons">badge</span>${this.banner.identifiersIcon.text}</li>
                                          <li id="liBrowsingHistory"><span class="material-icons">history_toggle_off</span>${this.banner.browsingHistoryIcon.text}</li>
                                          <li id="liLocation"><span class="material-icons">my_location</span>${this.banner.locationIcon.text}</li>
                                          </ul>
                                      </div> 
                                      <div class="icon__list__container">
                                          <ul class="icon__list">
                                          <li class="header">Data Shared</li>
                                          </ul>
                                        </div>
                                  </div>
                            
                                    
                                      <div class="btn__section">
                                          <button type="button" id="acceptCookies" class="btn__accept accept__btn__styles" style="color: ${this.banner.acceptBtn.color}; background-color: ${this.banner.acceptBtn.background};">
                                              ${this.banner.acceptBtn.text}
                                          </button>
                                          <button type="button" id="rejectCookies" class="btn__decline decline__btn__styles" style="color: ${this.banner.rejectBtn.color}; background-color: ${this.banner.rejectBtn.background};">
                                              ${this.banner.rejectBtn.text}
                                          </button>
                                      </div>
                                  </div>
                              `;
    document.body.appendChild(this.Cookies);
    this.DOMbanner = document.getElementById('cookieConsentNotice-banner')

    // Get li list items by id
    this.LiIdentifiers = document.getElementById('liIdentifiers')
    this.LiBrowsingHistory = document.getElementById('liBrowsingHistory')
    this.LiLocation = document.getElementById('liLocation')
    this.LiDeviceDetails = document.getElementById('liDeviceDetails')


    // SET EVENT LISTENERS
    document.getElementById('prebannerBtn').addEventListener('click', () => this.openSelector())
    document.getElementById('acceptCookies').addEventListener('click', () => this.acceptCookies())
    document.getElementById('rejectCookies').addEventListener('click', () => this.rejectCookies())
  }

  checkStatus() {
    switch (localStorage.getItem("CookieConsentNotice")) {
      case "1":
        this.openManageCookies();
        this.activateTracking();
        this.addCustomScript();
        break;
      case "0":
        this.openManageCookies();
        break;
      default:
        this.openSelector();
    }
  }

  openManageCookies() {
    this.PreBanner.style.display = this.config.hideAfterClick ? "none" : "block"
    this.DOMbanner.classList.remove('cookieConsentNotice__show')
    
  }

  openSelector() {
    this.PreBanner.style.display = "none";
    this.DOMbanner.classList.add('cookieConsentNotice__show')
    this.LiIdentifiers.style.display = this.config.showIdentifiers ? "block" : "none"
    this.LiBrowsingHistory.style.display = this.config.showBrowsingHistory ? "block" : "none"
    this.LiLocation.style.display = this.config.showLocation ? "block" : "none"
    this.LiDeviceDetails.style.display = this.config.showDeviceDetails ? "block" : "none"
    
  }

  acceptCookies() {
    localStorage.setItem("CookieConsentNotice", "1")
    this.openManageCookies()
    this.activateTracking()
    this.addCustomScript()
  }

  rejectCookies() {
    localStorage.setItem("CookieConsentNotice", "0");
    this.openManageCookies();
    this.disableTracking();
  }

  activateTracking() {
    // Google Analytics Tracking
    if (this.tracking.AnalyticsCode) {
      let Analytics = document.createElement('script');
      Analytics.setAttribute('src', `https://www.googletagmanager.com/gtag/js?id=${this.tracking.AnalyticsCode}`);
      document.head.appendChild(Analytics);
      let AnalyticsData = document.createElement('script');
      AnalyticsData.text = `window.dataLayer = window.dataLayer || [];
                                  function gtag(){dataLayer.push(arguments);}
                                  gtag('js', new Date());
                                  gtag('config', '${this.tracking.AnalyticsCode}');`;
      document.head.appendChild(AnalyticsData);
    }

    // Facebook pixel tracking code
    if (this.tracking.FacebookPixelCode) {
      let FacebookPixelData = document.createElement('script');
      FacebookPixelData.text = `
                                      !function(f,b,e,v,n,t,s)
                                      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                                      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                                      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                                      n.queue=[];t=b.createElement(e);t.async=!0;
                                      t.src=v;s=b.getElementsByTagName(e)[0];
                                      s.parentNode.insertBefore(t,s)}(window, document,'script',
                                      'https://connect.facebook.net/en_US/fbevents.js');
                                      fbq('init', '${this.tracking.FacebookPixelCode}');
                                      fbq('track', 'PageView');
                                  `;
      document.head.appendChild(FacebookPixelData);
      let FacebookPixel = document.createElement('noscript');
      FacebookPixel.setAttribute('height', `1`);
      FacebookPixel.setAttribute('width', `1`);
      FacebookPixel.setAttribute('style', `display:none`);
      FacebookPixel.setAttribute('src', `https://www.facebook.com/tr?id=${this.tracking.FacebookPixelCode}&ev=PageView&noscript=1`);
      document.head.appendChild(FacebookPixel);
    }

    // Hotjar Tracking
    if (this.tracking.HotjarTrackingCode) {
      let hotjarTrackingData = document.createElement('script');
      hotjarTrackingData.text = `
                                  (function(h,o,t,j,a,r){
                                      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                                      h._hjSettings={hjid:${this.tracking.HotjarTrackingCode},hjsv:6};
                                      a=o.getElementsByTagName('head')[0];
                                      r=o.createElement('script');r.async=1;
                                      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                                      a.appendChild(r);
                                  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
                                  `;
      document.head.appendChild(hotjarTrackingData);
    }
  }

  disableTracking() {
    // Google Analytics Tracking ('client_storage': 'none')
    if (this.tracking.AnalyticsCode) {
      let Analytics = document.createElement('script');
      Analytics.setAttribute('src', `https://www.googletagmanager.com/gtag/js?id=${this.tracking.AnalyticsCode}`);
      document.head.appendChild(Analytics);
      let AnalyticsData = document.createElement('script');
      AnalyticsData.text = `window.dataLayer = window.dataLayer || [];
                          function gtag(){dataLayer.push(arguments);}
                          gtag('js', new Date());
                          gtag('config', '${this.tracking.AnalyticsCode}' , {
                              'client_storage': 'none',
                              'anonymize_ip': true
                          });`;
      document.head.appendChild(AnalyticsData);
    }

    // Clear cookies - not working 100%
    this.clearCookies()
  }

  clearCookies() {
    let cookies = document.cookie.split("; ");
    for (let c = 0; c < cookies.length; c++) {
      let d = window.location.hostname.split(".");
      while (d.length > 0) {
        let cookieBase = encodeURIComponent(cookies[c].split(";")[0].split("=")[0]) + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' + d.join('.') + ' ;path=';
        let p = location.pathname.split('/');
        document.cookie = cookieBase + '/';
        while (p.length > 0) {
          document.cookie = cookieBase + p.join('/');
          p.pop();
        };
        d.shift();
      }
    }
  }

  addCustomScript() {
    if (this.tracking.customScript !== undefined) {
      let customScriptTag

      this.tracking.customScript.forEach(script => {
        if (script.type === 'src') {
          customScriptTag = document.createElement('script');
          customScriptTag.setAttribute('src', script.content);
        } else if (script.type === 'custom') {
          customScriptTag = document.createElement('script');
          customScriptTag.text = script.content;
        }

        if (script.position === 'head') {
          document.head.appendChild(customScriptTag);
        } else {
          document.body.appendChild(customScriptTag);
        }
      })
    }
  }

  start(language, obj) {
    if (!obj) obj = {}
    const lang = new LanguagesCCN(language)

    this.config = {
      border: obj.border || 'border',
      position: obj.position || 'left',
      hideAfterClick: obj.hideAfterClick || false,
      showIdentifiers: obj.showIdentifiers || false,
      showBrowsingHistory: obj.showBrowsingHistory || false,
      showLocation: obj.showLocation || false,
      showDeviceDetails: obj.showDeviceDetails || false,
    }

    this.tracking = {
      AnalyticsCode: obj.analytics || undefined,
      FacebookPixelCode: obj.facebookPixel || undefined,
      HotjarTrackingCode: obj.hotjar || undefined,
      customScript: obj.customScript || undefined
    }

    this.banner = {
      description: obj.bannerDescription || lang.bannerDescription,
      linkText: obj.bannerLinkText || lang.bannerLinkText,
      link: obj.policyLink || '#link',
      background: obj.bannerBackground || '#fff',
      color: obj.bannerColor || '#4a4a4a',
      heading: obj.bannerHeading !== 'none' ? obj.bannerHeading || lang.bannerHeading : '',
      acceptBtn: {
        text: obj.acceptBtnText || lang.acceptBtnText,
        background: obj.acceptBtnBackground || '#209cee',
        color: obj.acceptBtnColor || '#fff'
      },
      rejectBtn: {
        text: obj.rejectBtnText || lang.rejectBtnText,
        background: obj.rejectBtnBackground || '#209cee',
        color: obj.rejectBtnColor || '#fff',
      },
      identifiersIcon: {
        text: obj.identifiersIcontext || lang.identifiersIconText,
      },
      locationIcon: {
        text: obj.locationIconText || lang.locationIconText,
      },
      browsingHistoryIcon: {
        text: obj.browsingHistoryIconText || lang.browsingHistoryIconText,
      },
      deviceDetailsIcon: {
        text: obj.deviceDetailsIconText || lang.deviceDetailsIconText,
      },
      manageCookies: {
        color: obj.manageColor || '#4a4a4a',
        background: obj.manageBackground || '#fff',
        text: obj.manageText || lang.manageText,
      }
    }

    // Draw banner
    window.addEventListener('load', () => { this.render() })
  }
}

class LanguagesCCN {
  constructor(code) {
    this.init()
    let lang = this.arrLang[code] || this.arrLang['en']
    this.bannerHeading = lang['bannerHeading']
    this.bannerDescription = lang['bannerDescription']
    this.bannerLinkText = lang['bannerLinkText']
    this.acceptBtnText = lang['acceptBtnText']
    this.rejectBtnText = lang['rejectBtnText']
    this.identifiersIconText = lang['identifiersIconText']
    this.browsingHistoryIconText = lang['browsingHistoryIconText']
    this.locationIconText = lang['locationIconText']
    this.deviceDetailsIconText = lang['deviceDetailsIconText']
    this.manageText = lang['manageText']
  }

  init() {
    this.arrLang = {
      af: {
        'bannerHeading': 'Hoe ons koekies gebruik',
        'bannerDescription': 'Ons gebruik ons eie koekies en die van derdepartye, om inhoud te verpersoonlik en om webverkeer te ontleed.',
        'bannerLinkText': 'Lees meer oor koekies',
        'acceptBtnText': 'Aanvaar',
        'rejectBtnText': 'Weier',
        'identifiersIconText': 'Identifiseerders',
        'browsingHistoryIconText': 'Blaai Geskiedenis',
        'locationIconText': 'Lokasie',
        'deviceDetailsIconText': 'Toestelbesonderhede',
        'manageText': 'Koekie-instellings'
      },
      en: {
        'bannerHeading': 'How we use cookies',
        'bannerDescription': 'We use our own and third-party cookies to personalize content and to analyze web traffic.',
        'bannerLinkText': 'Read more about cookies',
        'acceptBtnText': 'Accept',
        'rejectBtnText': 'Reject',
        'identifiersIconText': 'Identifiers',
        'browsingHistoryIconText': 'Browsing History',
        'locationIconText': 'Location',
        'deviceDetailsIconText': 'Device Details',
        'manageText': 'Manage Cookies'
      }
    }
  }

}

const cookieConsentNotice = new CookieConsentNotice()
