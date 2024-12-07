const html = `
<script>window.enableEventObserver=true</script>
<script src="https://cdn03.jotfor.ms/static/prototype.forms.js?v=3.3.59252" type="text/javascript"></script>
<script src="https://cdn01.jotfor.ms/static/jotform.forms.js?v=3.3.59252" type="text/javascript"></script>
<script src="https://cdn02.jotfor.ms/js/punycode-1.4.1.min.js?v=3.3.59252" type="text/javascript" defer></script>
<script src="https://cdn03.jotfor.ms/js/vendor/maskedinput_5.0.9.min.js?v=3.3.59252" type="text/javascript"></script>
<script src="https://cdn01.jotfor.ms/js/vendor/imageinfo.js?v=3.3.59252" type="text/javascript"></script>
<script src="https://cdn02.jotfor.ms/file-uploader/fileuploader.js?v=3.3.59252" type="text/javascript"></script>
<script src="https://cdn01.jotfor.ms/s/umd/cd90453a52d/for-widgets-server.js?v=3.3.59252" type="text/javascript"></script>
<script src="https://cdn03.jotfor.ms/js/vendor/math-processor.js?v=3.3.59252" type="text/javascript"></script>
<script src="https://cdn01.jotfor.ms/js/vendor/smoothscroll.min.js?v=3.3.59252" type="text/javascript"></script>
<script src="https://cdn02.jotfor.ms/js/errorNavigation.js?v=3.3.59252" type="text/javascript"></script>
<script type="text/javascript">	JotForm.newDefaultTheme = true;
	JotForm.extendsNewTheme = false;
	JotForm.singleProduct = false;
	JotForm.newPaymentUIForNewCreatedForms = true;
	JotForm.texts = {"confirmEmail":"E-mail does not match","pleaseWait":"Please wait...","validateEmail":"You need to validate this e-mail","confirmClearForm":"Are you sure you want to clear the form","lessThan":"Your score should be less than or equal to","incompleteFields":"There are incomplete required fields. Please complete them.","required":"This field is required.","requireOne":"At least one field required.","requireEveryRow":"Every row is required.","requireEveryCell":"Every cell is required.","email":"Enter a valid e-mail address","alphabetic":"This field can only contain letters","numeric":"This field can only contain numeric values","alphanumeric":"This field can only contain letters and numbers.","cyrillic":"This field can only contain cyrillic characters","url":"This field can only contain a valid URL","currency":"This field can only contain currency values.","fillMask":"Field value must fill mask.","uploadExtensions":"You can only upload following files:","noUploadExtensions":"File has no extension file type (e.g. .txt, .png, .jpeg)","uploadFilesize":"File size cannot be bigger than:","uploadFilesizemin":"File size cannot be smaller than:","gradingScoreError":"Score total should only be less than or equal to","inputCarretErrorA":"Input should not be less than the minimum value:","inputCarretErrorB":"Input should not be greater than the maximum value:","maxDigitsError":"The maximum digits allowed is","minCharactersError":"The number of characters should not be less than the minimum value:","maxCharactersError":"The number of characters should not be more than the maximum value:","freeEmailError":"Free email accounts are not allowed","minSelectionsError":"The minimum required number of selections is ","maxSelectionsError":"The maximum number of selections allowed is ","pastDatesDisallowed":"Date must not be in the past.","dateLimited":"This date is unavailable.","dateInvalid":"This date is not valid. The date format is {format}","dateInvalidSeparate":"This date is not valid. Enter a valid {element}.","ageVerificationError":"You must be older than {minAge} years old to submit this form.","multipleFileUploads_typeError":"{file} has invalid extension. Only {extensions} are allowed.","multipleFileUploads_sizeError":"{file} is too large, maximum file size is {sizeLimit}.","multipleFileUploads_minSizeError":"{file} is too small, minimum file size is {minSizeLimit}.","multipleFileUploads_emptyError":"{file} is empty, please select files again without it.","multipleFileUploads_uploadFailed":"File upload failed, please remove it and upload the file again.","multipleFileUploads_onLeave":"The files are being uploaded, if you leave now the upload will be cancelled.","multipleFileUploads_fileLimitError":"Only {fileLimit} file uploads allowed.","dragAndDropFilesHere_infoMessage":"Drag and drop files here","chooseAFile_infoMessage":"Choose a file","maxFileSize_infoMessage":"Max. file size","generalError":"There are errors on the form. Please fix them before continuing.","generalPageError":"There are errors on this page. Please fix them before continuing.","wordLimitError":"Too many words. The limit is","wordMinLimitError":"Too few words.  The minimum is","characterLimitError":"Too many Characters.  The limit is","characterMinLimitError":"Too few characters. The minimum is","ccInvalidNumber":"Credit Card Number is invalid.","ccInvalidCVC":"CVC number is invalid.","ccInvalidExpireDate":"Expire date is invalid.","ccInvalidExpireMonth":"Expiration month is invalid.","ccInvalidExpireYear":"Expiration year is invalid.","ccMissingDetails":"Please fill up the credit card details.","ccMissingProduct":"Please select at least one product.","ccMissingDonation":"Please enter numeric values for donation amount.","disallowDecimals":"Please enter a whole number.","restrictedDomain":"This domain is not allowed","ccDonationMinLimitError":"Minimum amount is {minAmount} {currency}","requiredLegend":"All fields marked with * are required and must be filled.","geoPermissionTitle":"Permission Denied","geoPermissionDesc":"Check your browser's privacy settings.","geoNotAvailableTitle":"Position Unavailable","geoNotAvailableDesc":"Location provider not available. Please enter the address manually.","geoTimeoutTitle":"Timeout","geoTimeoutDesc":"Please check your internet connection and try again.","selectedTime":"Selected Time","formerSelectedTime":"Former Time","cancelAppointment":"Cancel Appointment","cancelSelection":"Cancel Selection","noSlotsAvailable":"No slots available","slotUnavailable":"{time} on {date} has been selected is unavailable. Please select another slot.","multipleError":"There are {count} errors on this page. Please correct them before moving on.","oneError":"There is {count} error on this page. Please correct it before moving on.","doneMessage":"Well done! All errors are fixed.","invalidTime":"Enter a valid time","doneButton":"Done","reviewSubmitText":"Review and Submit","nextButtonText":"Next","prevButtonText":"Previous","seeErrorsButton":"See Errors","notEnoughStock":"Not enough stock for the current selection","notEnoughStock_remainedItems":"Not enough stock for the current selection ({count} items left)","soldOut":"Sold Out","justSoldOut":"Just Sold Out","selectionSoldOut":"Selection Sold Out","subProductItemsLeft":"({count} items left)","startButtonText":"START","submitButtonText":"Submit","submissionLimit":"Sorry! Only one entry is allowed. <br> Multiple submissions are disabled for this form.","reviewBackText":"Back to Form","seeAllText":"See All","progressMiddleText":"of","fieldError":"field has an error.","error":"Error"};
	JotForm.newPaymentUI = true;
	JotForm.originalLanguage = "en";
	JotForm.isFormViewTrackingAllowed = true;
	JotForm.replaceTagTest = true;
	JotForm.uploadServerURL = "https://upload.jotform.com/upload";

   JotForm.setCalculations([{"replaceText":"","readOnly":false,"newCalculationType":true,"allowZeroCopy":true,"useCommasForDecimals":false,"operands":"","equation":"Email: ","showBeforeInput":false,"showEmptyDecimals":false,"ignoreHiddenFields":false,"insertAsText":false,"id":"action_0_1729665578039","resultField":"97","decimalPlaces":"2","isError":false,"conditionId":"1729665539096","conditionTrue":false,"baseField":"88"},{"replaceText":"","readOnly":false,"newCalculationType":true,"allowZeroCopy":true,"useCommasForDecimals":false,"operands":"","equation":"Customer Name: ","showBeforeInput":false,"showEmptyDecimals":false,"ignoreHiddenFields":false,"insertAsText":false,"id":"action_0_1729665558253","resultField":"96","decimalPlaces":"2","isError":false,"conditionId":"1729665394176","conditionTrue":false,"baseField":"85"},{"replaceText":"","readOnly":false,"newCalculationType":true,"allowZeroCopy":true,"useCommasForDecimals":false,"operands":"65","equation":"ELM - {65}","showBeforeInput":false,"showEmptyDecimals":false,"ignoreHiddenFields":false,"insertAsText":false,"id":"action_1727023774921","resultField":"71","decimalPlaces":"2","isError":false,"conditionId":"1727023824744","conditionTrue":false,"baseField":"65"},{"replaceText":"","readOnly":false,"newCalculationType":true,"allowZeroCopy":true,"useCommasForDecimals":false,"operands":"","equation":"Notes:","showBeforeInput":false,"showEmptyDecimals":false,"ignoreHiddenFields":false,"insertAsText":false,"id":"action_1726817280887","resultField":"70","decimalPlaces":"2","isError":false,"conditionId":"1726817315703","conditionTrue":false,"baseField":"10"}]);
   JotForm.setConditions([{"action":[{"id":"action_1731108471415","visibility":"HideMultiple","isError":false,"fields":["41","27"]}],"id":"1731108489869","index":"0","link":"Any","priority":"0","terms":[{"id":"term_1731108471415","field":"99","operator":"equals","value":"No","isError":false}],"type":"field"},{"action":[{"replaceText":"","readOnly":false,"newCalculationType":true,"allowZeroCopy":true,"useCommasForDecimals":false,"operands":"","equation":"Email: ","showBeforeInput":false,"showEmptyDecimals":false,"ignoreHiddenFields":false,"insertAsText":false,"id":"action_0_1729665578039","resultField":"97","decimalPlaces":"2","isError":false,"conditionId":"1729665539096","conditionTrue":false,"baseField":"88"}],"id":"1729665539096","index":"1","link":"Any","priority":"1","terms":[{"id":"term_0_1729665578039","field":"88","operator":"isFilled","value":"","isError":false}],"type":"calculation"},{"action":[{"replaceText":"","readOnly":false,"newCalculationType":true,"allowZeroCopy":true,"useCommasForDecimals":false,"operands":"","equation":"Customer Name: ","showBeforeInput":false,"showEmptyDecimals":false,"ignoreHiddenFields":false,"insertAsText":false,"id":"action_0_1729665558253","resultField":"96","decimalPlaces":"2","isError":false,"conditionId":"1729665394176","conditionTrue":false,"baseField":"85"}],"id":"1729665394176","index":"2","link":"Any","priority":"2","terms":[{"id":"term_0_1729665558253","field":"85","operator":"isFilled","value":"","isError":false},{"id":"term_1_1729665558253","field":"84","operator":"isFilled","value":"","isError":false}],"type":"calculation"},{"action":[{"id":"action_1727832356988","visibility":"Show","isError":false,"field":"75"}],"id":"1727832368009","index":"15","link":"Any","priority":"15","terms":[{"id":"term_1727832356988","field":"75","operator":"isFilled","value":"","isError":false}],"type":"field"},{"action":[{"replaceText":"","readOnly":false,"newCalculationType":true,"allowZeroCopy":true,"useCommasForDecimals":false,"operands":"65","equation":"ELM - {65}","showBeforeInput":false,"showEmptyDecimals":false,"ignoreHiddenFields":false,"insertAsText":false,"id":"action_1727023774921","resultField":"71","decimalPlaces":"2","isError":false,"conditionId":"1727023824744","conditionTrue":false,"baseField":"65"}],"id":"1727023824744","index":"16","link":"Any","priority":"16","terms":[{"id":"term_1727023774921","field":"65","operator":"isFilled","value":"","isError":false}],"type":"calculation"},{"action":[{"replaceText":"","readOnly":false,"newCalculationType":true,"allowZeroCopy":true,"useCommasForDecimals":false,"operands":"","equation":"Notes:","showBeforeInput":false,"showEmptyDecimals":false,"ignoreHiddenFields":false,"insertAsText":false,"id":"action_1726817280887","resultField":"70","decimalPlaces":"2","isError":false,"conditionId":"1726817315703","conditionTrue":false,"baseField":"10"}],"id":"1726817315703","index":"17","link":"Any","priority":"17","terms":[{"id":"term_1726817280887","field":"10","operator":"isFilled","value":"","isError":false}],"type":"calculation"}]);	JotForm.clearFieldOnHide="disable";
	JotForm.submitError="jumpToFirstError";
	JotForm.isFullSource = true;

	JotForm.init(function(){
	/*INIT-START*/
if (window.JotForm && JotForm.accessible) $('input_75').setAttribute('tabindex',0);
if (window.JotForm && JotForm.accessible) $('input_71').setAttribute('tabindex',0);
if (window.JotForm && JotForm.accessible) $('input_66').setAttribute('tabindex',0);
if (window.JotForm && JotForm.accessible) $('input_67').setAttribute('tabindex',0);
if (window.JotForm && JotForm.accessible) $('input_85').setAttribute('tabindex',0);
if (window.JotForm && JotForm.accessible) $('input_84').setAttribute('tabindex',0);
if (window.JotForm && JotForm.accessible) $('input_96').setAttribute('tabindex',0);
      JotForm.setPhoneMaskingValidator( 'input_4_full', '\u0028\u0023\u0023\u0023\u0029 \u0023\u0023\u0023\u002d\u0023\u0023\u0023\u0023' );
if (window.JotForm && JotForm.accessible) $('input_97').setAttribute('tabindex',0);

 JotForm.calendarMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];
 if (!JotForm.calenderViewMonths) JotForm.calenderViewMonths = {};  JotForm.calenderViewMonths[27] = ["January","February","March","April","May","June","July","August","September","October","November","December"];
 if (!JotForm.calenderViewDays) JotForm.calenderViewDays = {};  JotForm.calenderViewDays[27] = ["","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",""];
 JotForm.calendarDays = ["","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",""];
 JotForm.calendarOther = {"today":"Today"};
 var languageOptions = document.querySelectorAll('#langList li'); 
 for(var langIndex = 0; langIndex < languageOptions.length; langIndex++) { 
   languageOptions[langIndex].on('click', function(e) { setTimeout(function(){ JotForm.setCalendar("27", false, {"days":{"monday":true,"tuesday":true,"wednesday":true,"thursday":true,"friday":true,"saturday":true,"sunday":false},"future":true,"past":false,"custom":false,"ranges":false,"start":"","end":"","countSelectedDaysOnly":false}); }, 0); });
 } 
 JotForm.onTranslationsFetch(function() { JotForm.setCalendar("27", false, {"days":{"monday":true,"tuesday":true,"wednesday":true,"thursday":true,"friday":true,"saturday":true,"sunday":false},"future":true,"past":false,"custom":false,"ranges":false,"start":"","end":"","countSelectedDaysOnly":false}); });
if (window.JotForm && JotForm.accessible) $('input_10').setAttribute('tabindex',0);
      JotForm.setCustomHint( 'input_10', 'Notes for the tech. (not required)' );
if (window.JotForm && JotForm.accessible) $('input_70').setAttribute('tabindex',0);
      JotForm.alterTexts({"ageVerificationError":"You must be older than {minAge} years old to submit this form.","alphabetic":"This field can only contain letters","alphanumeric":"This field can only contain letters and numbers.","cancelAppointment":"Cancel Appointment","cancelSelection":"Cancel Selection","ccDonationMinLimitError":"Minimum amount is {minAmount} {currency}","ccInvalidCVC":"CVC number is invalid.","ccInvalidExpireDate":"Expire date is invalid.","ccInvalidExpireMonth":"Expiration month is invalid.","ccInvalidExpireYear":"Expiration year is invalid.","ccInvalidNumber":"Credit Card Number is invalid.","ccMissingDetails":"Please fill up the credit card details.","ccMissingDonation":"Please enter numeric values for donation amount.","ccMissingProduct":"Please select at least one product.","characterLimitError":"Too many Characters.  The limit is","characterMinLimitError":"Too few characters. The minimum is","chooseAFile_infoMessage":"Choose a file","confirmClearForm":"Are you sure you want to clear the form","confirmEmail":"E-mail does not match","currency":"This field can only contain currency values.","cyrillic":"This field can only contain cyrillic characters","dateInvalid":"This date is not valid. The date format is {format}","dateInvalidSeparate":"This date is not valid. Enter a valid {element}.","dateLimited":"This date is unavailable.","disallowDecimals":"Please enter a whole number.","doneButton":"Done","doneMessage":"Well done! All errors are fixed.","dragAndDropFilesHere_infoMessage":"Drag and drop files here","email":"Enter a valid e-mail address","error":"Error","fieldError":"field has an error.","fillMask":"Field value must fill mask.","formerSelectedTime":"Former Time","freeEmailError":"Free email accounts are not allowed","generalError":"There are errors on the form. Please fix them before continuing.","generalPageError":"There are errors on this page. Please fix them before continuing.","geoNotAvailableDesc":"Location provider not available. Please enter the address manually.","geoNotAvailableTitle":"Position Unavailable","geoPermissionDesc":"Check your browser's privacy settings.","geoPermissionTitle":"Permission Denied","geoTimeoutDesc":"Please check your internet connection and try again.","geoTimeoutTitle":"Timeout","gradingScoreError":"Score total should only be less than or equal to","incompleteFields":"There are incomplete required fields. Please complete them.","inputCarretErrorA":"Input should not be less than the minimum value:","inputCarretErrorB":"Input should not be greater than the maximum value:","invalidTime":"Enter a valid time","justSoldOut":"Just Sold Out","lessThan":"Your score should be less than or equal to","maxCharactersError":"The number of characters should not be more than the maximum value:","maxDigitsError":"The maximum digits allowed is","maxFileSize_infoMessage":"Max. file size","maxSelectionsError":"The maximum number of selections allowed is ","minCharactersError":"The number of characters should not be less than the minimum value:","minSelectionsError":"The minimum required number of selections is ","multipleError":"There are {count} errors on this page. Please correct them before moving on.","multipleFileUploads_emptyError":"{file} is empty, please select files again without it.","multipleFileUploads_fileLimitError":"Only {fileLimit} file uploads allowed.","multipleFileUploads_minSizeError":"{file} is too small, minimum file size is {minSizeLimit}.","multipleFileUploads_onLeave":"The files are being uploaded, if you leave now the upload will be cancelled.","multipleFileUploads_sizeError":"{file} is too large, maximum file size is {sizeLimit}.","multipleFileUploads_typeError":"{file} has invalid extension. Only {extensions} are allowed.","multipleFileUploads_uploadFailed":"File upload failed, please remove it and upload the file again.","nextButtonText":"Next","noSlotsAvailable":"No slots available","notEnoughStock":"Not enough stock for the current selection","notEnoughStock_remainedItems":"Not enough stock for the current selection ({count} items left)","noUploadExtensions":"File has no extension file type (e.g. .txt, .png, .jpeg)","numeric":"This field can only contain numeric values","oneError":"There is {count} error on this page. Please correct it before moving on.","pastDatesDisallowed":"Date must not be in the past.","pleaseWait":"Please wait...","prevButtonText":"Previous","progressMiddleText":"of","required":"This field is required.","requiredLegend":"All fields marked with * are required and must be filled.","requireEveryCell":"Every cell is required.","requireEveryRow":"Every row is required.","requireOne":"At least one field required.","restrictedDomain":"This domain is not allowed","reviewBackText":"Back to Form","reviewSubmitText":"Review and Submit","seeAllText":"See All","seeErrorsButton":"See Errors","selectedTime":"Selected Time","selectionSoldOut":"Selection Sold Out","slotUnavailable":"{time} on {date} has been selected is unavailable. Please select another slot.","soldOut":"Sold Out","startButtonText":"START","submissionLimit":"Sorry! Only one entry is allowed. &lt;br&gt; Multiple submissions are disabled for this form.","submitButtonText":"Submit","subProductItemsLeft":"({count} items left)","uploadExtensions":"You can only upload following files:","uploadFilesize":"File size cannot be bigger than:","uploadFilesizemin":"File size cannot be smaller than:","url":"This field can only contain a valid URL","validateEmail":"You need to validate this e-mail","wordLimitError":"Too many words. The limit is","wordMinLimitError":"Too few words.  The minimum is"});
      setTimeout(function() {
          JotForm.initMultipleUploads();
      }, 2);
	/*INIT-END*/
	});

   setTimeout(function() {
JotForm.paymentExtrasOnTheFly([null,{"name":"heading","qid":"1","text":"Lead Submission Form","type":"control_head"},null,null,{"name":"phoneNumber","qid":"4","text":"Phone Number","type":"control_phone"},null,null,null,null,null,{"mde":"No","name":"notes","qid":"10","subLabel":"","text":"Notes","type":"control_textarea","wysiwyg":"Disable"},null,null,null,{"name":"submit","qid":"14","text":"Submit","type":"control_button"},{"description":"","name":"lead_sheet","qid":"15","subLabel":"Please double check all form information is entered correctly. ","text":"Lead Sheet Picture","type":"control_fileupload"},null,null,null,null,null,null,null,null,null,null,null,{"name":"date","qid":"27","text":"Appointment Date","type":"control_datetime"},null,null,null,{"name":"promoter_email","qid":"31","subLabel":"","text":"Promoter Email","type":"control_email"},null,null,null,null,null,{"name":"Divider","qid":"37","text":"Divider","type":"control_divider"},null,null,null,{"name":"day_time","qid":"41","text":"Appointment Day & Time","type":"control_widget"},null,null,null,null,null,null,null,null,null,null,null,{"name":"divider53","qid":"53","text":"Divider","type":"control_divider"},{"name":"divider54","qid":"54","text":"Divider","type":"control_divider"},null,null,null,null,null,null,null,null,null,null,{"description":"","name":"promoter_name","qid":"65","text":"Promoter Name","type":"control_fullname"},{"description":"","name":"first_name","qid":"66","subLabel":"","text":"Lead First Name","type":"control_textbox"},{"description":"","name":"last_name","qid":"67","subLabel":"","text":"Lead Last Name","type":"control_textbox"},null,null,{"description":"","name":"n","qid":"70","subLabel":"","text":"n","type":"control_textbox"},{"description":"","name":"ename","qid":"71","subLabel":"","text":"ename","type":"control_textbox"},null,null,null,{"description":"","name":"testing","qid":"75","subLabel":"This field is only visible while testing.","text":"testing","type":"control_textbox"},null,null,null,null,null,null,null,null,{"description":"","name":"partner_last_name","qid":"84","subLabel":"","text":"Partner Last Name","type":"control_textbox"},{"description":"","name":"partner_first_name","qid":"85","subLabel":"","text":"Partner First Name","type":"control_textbox"},null,null,{"description":"","name":"lead_email","qid":"88","subLabel":"","text":"Lead Email","type":"control_email"},{"name":"divider89","qid":"89","text":"Divider","type":"control_divider"},null,null,null,null,null,null,{"description":"","name":"cname2","qid":"96","subLabel":"","text":"cname2","type":"control_textbox"},{"description":"","name":"elabel","qid":"97","subLabel":"","text":"elabel","type":"control_textbox"},{"name":"address","qid":"98","text":"Address","type":"control_widget"},{"description":"","name":"setapp","qid":"99","text":"Did you set an appointment date and time?","type":"control_radio"},{"name":"typeA","qid":"100","text":"Lead Sheet Picture","type":"control_widget"},{"description":"","name":"typeA101","qid":"101","text":"Did you make sure to fill top section of lead sheet? (Date, Promoter, Event Name)","type":"control_radio"},null,null,null,null,null,{"name":"typeA107","qid":"107","text":"Office","type":"control_widget"},{"name":"event","qid":"108","text":"Event","type":"control_widget"}]);}, 20); 
</script>
<link type="text/css" rel="stylesheet" href="https://cdn02.jotfor.ms/stylebuilder/static/form-common.css?v=71e44d6
"/>
<style type="text/css">@media print{*{-webkit-print-color-adjust: exact !important;color-adjust: exact !important;}.form-section{display:inline!important}.form-pagebreak{display:none!important}.form-section-closed{height:auto!important}.page-section{position:initial!important}}</style>
<link type="text/css" rel="stylesheet" href="https://cdn03.jotfor.ms/themes/CSS/5e6b428acc8c4e222d1beb91.css?v=3.3.59252&themeRevisionID=65660e4b326633110492e01a"/>
<link type="text/css" rel="stylesheet" href="https://cdn01.jotfor.ms/css/styles/payment/payment_styles.css?3.3.59252" />
<link type="text/css" rel="stylesheet" href="https://cdn02.jotfor.ms/css/styles/payment/payment_feature.css?3.3.59252" />
<style type="text/css" id="form-designer-style">
    /* Injected CSS Code */
/*PREFERENCES STYLE*/
    .form-all {
      font-family: Inter, sans-serif;
    }
  
    
  
    .form-line {
      margin-top: 0px;
      margin-bottom: 0px;
    }
  
    .form-all {
      max-width: 752px;
      width: 100%;
    }
  
    .form-label.form-label-left,
    .form-label.form-label-right,
    .form-label.form-label-left.form-label-auto,
    .form-label.form-label-right.form-label-auto {
      width: 230px;
    }
  
    .form-all {
      font-size: 16px
    }
  
    .supernova .form-all, .form-all {
      background-color: #212529;
    }
  
    .form-all {
      color: #ffffff;
    }
    .form-header-group .form-header {
      color: #ffffff;
    }
    .form-header-group .form-subHeader {
      color: #ffffff;
    }
    .form-label-top,
    .form-label-left,
    .form-label-right,
    .form-html,
    .form-checkbox-item label,
    .form-radio-item label,
    span.FITB .qb-checkbox-label,
    span.FITB .qb-radiobox-label,
    span.FITB .form-radio label,
    span.FITB .form-checkbox label,
    [data-blotid][data-type=checkbox] [data-labelid],
    [data-blotid][data-type=radiobox] [data-labelid],
    span.FITB-inptCont[data-type=checkbox] label,
    span.FITB-inptCont[data-type=radiobox] label {
      color: #ffffff;
    }
    .form-sub-label {
      color: #ffffff;
    }
  
  .supernova {
    background-color: #fbf8ef;
  }
  .supernova body {
    background: transparent;
  }
  
    .form-textbox,
    .form-textarea,
    .form-dropdown,
    .form-radio-other-input,
    .form-checkbox-other-input,
    .form-captcha input,
    .form-spinner input {
      background-color: #ffffff;
    }
  
      
    .supernova {
      background-repeat: no-repeat;
      background-size:cover;
      background-attachment: fixed;
      background-position: center top;
    }

      .supernova, #stage {
        background-image: none;
      }
    
      .form-all {
        background-image: none;
      }
    /*PREFERENCES STYLE*//*__INSPECT_SEPERATOR__*/
.form-label.form-label-auto {
        
        display: inline-block;
        float: left;
        text-align: left;
      
      }
    /* Injected CSS Code */
</style>

<form class="jotform-form" onsubmit="return typeof testSubmitFunction !== 'undefined' && testSubmitFunction();" action="https://submit.jotform.com/submit/243411793749162" method="post" enctype="multipart/form-data" name="form_243411793749162" id="243411793749162" accept-charset="utf-8" autocomplete="off"><input type="hidden" name="formID" value="243411793749162" /><input type="hidden" id="JWTContainer" value="" /><input type="hidden" id="cardinalOrderNumber" value="" /><input type="hidden" id="jsExecutionTracker" name="jsExecutionTracker" value="build-date-1733560829951" /><input type="hidden" id="submitSource" name="submitSource" value="unknown" /><input type="hidden" id="buildDate" name="buildDate" value="1733560829951" /><input type="hidden" name="uploadServerUrl" value="https://upload.jotform.com/upload" /><input type="hidden" name="eventObserver" value="1" />
  <div id="formCoverLogo" style="margin-bottom:32px" class="form-cover-wrapper form-has-cover form-page-cover-image-align-center">
    <div class="form-page-cover-image-wrapper" style="max-width:752px"><img src="https://www.jotform.com/uploads/justinangelesleafguard/form_files/leafguard-logo.66eae98fcaa7a0.84820502.webp" class="form-page-cover-image" width="210" height="51" alt="Lead Submission Form Logo" style="aspect-ratio:210/51" /></div>
  </div>
  <div role="main" class="form-all">
    <ul class="form-section page-section" role="presentation">
      <li id="cid_1" class="form-input-wide" data-type="control_head">
        <div class="form-header-group  header-small">
          <div class="header-text httac htvam">
            <h3 id="header_1" class="form-header" data-component="header">Lead Submission Form</h3>
          </div>
        </div>
      </li>
      <li class="form-line always-hidden form-field-hidden" style="display:none;" data-type="control_textbox" id="id_75"><label class="form-label form-label-left" id="label_75" for="input_75" aria-hidden="false"> testing </label>
        <div id="cid_75" class="form-input always-hidden" data-layout="half"> <span class="form-sub-label-container" style="vertical-align:top"><input type="text" id="input_75" name="q75_testing" data-type="input-textbox" class="form-readonly form-textbox" data-defaultvalue="" autoComplete="nope" style="width:310px" size="310" tabindex="-1" data-component="textbox" aria-labelledby="label_75 sublabel_input_75" readonly="" value="" /><label class="form-sub-label" for="input_75" id="sublabel_input_75" style="min-height:13px">This field is only visible while testing.</label></span> </div>
      </li>
      <li class="form-line jf-required" data-type="control_widget" id="id_107"><label class="form-label form-label-left" id="label_107" for="input_107" aria-hidden="false"> Office<span class="form-required">*</span> </label>
        <div id="cid_107" class="form-input jf-required" data-layout="full">
          <div data-widget-name="Office" style="width:100%;text-align:Left;overflow-x:auto" data-component="widget-field"><iframe data-client-id="53e4f95be39aed094c00009c" title="Office" frameBorder="0" scrolling="no" allowtransparency="true" allow="geolocation; microphone; camera; autoplay; encrypted-media; fullscreen" data-type="iframe" class="custom-field-frame" id="customFieldFrame_107" src="" style="max-width:400px;border:none;width:100%;height:200px" data-width="400" data-height="200"></iframe>
            <div class="widget-inputs-wrapper"><input id="input_107" class="form-hidden form-widget widget-required " type="hidden" name="q107_typeA107" value="" /><input id="widget_settings_107" class="form-hidden form-widget-settings" type="hidden" data-version="2" value="%5B%7B%22name%22%3A%22defaultOptions%22%2C%22value%22%3A%22Spokane%5CnDallas%5CnOregon%5CnNebraska%5CnHouston%5CnOklahoma%5CnSeattle%5CnUtah%22%7D%2C%7B%22name%22%3A%22customCSS%22%2C%22value%22%3A%22%23user-option-list%20%7B%5Cn%20%20box-sizing%3A%20border-box%3B%5Cn%20%20outline%3A%200%3B%5Cn%20%20margin%3A%200%3B%5Cn%20%20font-size%3A%201em%3B%5Cn%20%20border-radius%3A%204px%3B%5Cn%20%20border-width%3A%201px%3B%5Cn%20%20display%3A%20block%3B%5Cn%20%20font-family%3A%20inherit%3B%5Cn%20%20border-color%3A%20%23b8bdc9%3B%5Cn%20%20color%3A%20%232c3345%3B%5Cn%20%20background-color%3A%20%23fff%3B%5Cn%20%20max-height%3A%202.5em%3B%5Cn%20%20%20height%3A%2040px%3B%5Cnwidth%3A%20100%25%3B%5Cn%7D%5Cn%22%7D%5D" /></div>
            <script type="text/javascript">
              setTimeout(function()
              {
                function renderWidget()
                {
                  var _cFieldFrame = document.getElementById("customFieldFrame_107");
                  if (_cFieldFrame)
                  {
                    _cFieldFrame.onload = function()
                    {
                      if (typeof widgetFrameLoaded !== 'undefined')
                      {
                        widgetFrameLoaded(107,
                        {
                          "formID": 243411793749162
                        }, undefined)
                      }
                    };
                    _cFieldFrame.src = "//data-widgets.jotform.io/userContributedDropdown/?qid=107&isOpenedInPortal=undefined&isOpenedInAgent=undefined&align=Left&ref=" +
                      encodeURIComponent(window.location.protocol + "//" + window.location.host) + '' + '' + '' +
                      '&injectCSS=' + encodeURIComponent(window.location.search.indexOf("ndt=1") > -1);
                    _cFieldFrame.addClassName("custom-field-frame-rendered");
                  }
                }
                if (false)
                {
                  var _interval = setInterval(function()
                  {
                    var dataMode = document.querySelector('html').getAttribute('data-mode');
                    if (dataMode === 'fillMode')
                    {
                      renderWidget()
                      clearInterval(_interval);
                    }
                  }, 1000);
                }
                else
                {
                  renderWidget();
                }
              }, 0);
            </script>
          </div>
        </div>
      </li>
      <li class="form-line jf-required" data-type="control_widget" id="id_108"><label class="form-label form-label-left" id="label_108" for="input_108" aria-hidden="false"> Event<span class="form-required">*</span> </label>
        <div id="cid_108" class="form-input jf-required" data-layout="full">
          <div data-widget-name="Office" style="width:100%;text-align:Left;overflow-x:auto" data-component="widget-field"><iframe data-client-id="53e4f95be39aed094c00009c" title="Office" frameBorder="0" scrolling="no" allowtransparency="true" allow="geolocation; microphone; camera; autoplay; encrypted-media; fullscreen" data-type="iframe" class="custom-field-frame" id="customFieldFrame_108" src="" style="max-width:400px;border:none;width:100%;height:200px" data-width="400" data-height="200"></iframe>
            <div class="widget-inputs-wrapper"><input id="input_108" class="form-hidden form-widget widget-required " type="hidden" name="q108_event" value="" /><input id="widget_settings_108" class="form-hidden form-widget-settings" type="hidden" data-version="2" value="%5B%7B%22name%22%3A%22defaultOptions%22%2C%22value%22%3A%22Please%20Enter%20Event%5CnNorthwest%20Winterfest%5CnOutdoor%20European%20Christmas%20Market%5CnLCV%20Christmas%20Market%5CnCheney%20High%20School%20Holiday%20Extravaganza%22%7D%2C%7B%22name%22%3A%22selectedValue%22%2C%22value%22%3A%22Please%20Enter%20Event%22%7D%2C%7B%22name%22%3A%22customCSS%22%2C%22value%22%3A%22%23user-option-list%20%7B%5Cn%20%20box-sizing%3A%20border-box%3B%5Cn%20%20outline%3A%200%3B%5Cn%20%20margin%3A%200%3B%5Cn%20%20font-size%3A%201em%3B%5Cn%20%20border-radius%3A%204px%3B%5Cn%20%20border-width%3A%201px%3B%5Cn%20%20display%3A%20block%3B%5Cn%20%20font-family%3A%20inherit%3B%5Cn%20%20border-color%3A%20%23b8bdc9%3B%5Cn%20%20color%3A%20%232c3345%3B%5Cn%20%20background-color%3A%20%23fff%3B%5Cn%20%20max-height%3A%202.5em%3B%5Cn%20%20%20height%3A%2040px%3B%5Cnwidth%3A%20100%25%3B%5Cn%7D%5Cn%22%7D%5D" /></div>
            <script type="text/javascript">
              setTimeout(function()
              {
                function renderWidget()
                {
                  var _cFieldFrame = document.getElementById("customFieldFrame_108");
                  if (_cFieldFrame)
                  {
                    _cFieldFrame.onload = function()
                    {
                      if (typeof widgetFrameLoaded !== 'undefined')
                      {
                        widgetFrameLoaded(108,
                        {
                          "formID": 243411793749162
                        }, undefined)
                      }
                    };
                    _cFieldFrame.src = "//data-widgets.jotform.io/userContributedDropdown/?qid=108&isOpenedInPortal=undefined&isOpenedInAgent=undefined&align=Left&ref=" +
                      encodeURIComponent(window.location.protocol + "//" + window.location.host) + '' + '' + '' +
                      '&injectCSS=' + encodeURIComponent(window.location.search.indexOf("ndt=1") > -1);
                    _cFieldFrame.addClassName("custom-field-frame-rendered");
                  }
                }
                if (false)
                {
                  var _interval = setInterval(function()
                  {
                    var dataMode = document.querySelector('html').getAttribute('data-mode');
                    if (dataMode === 'fillMode')
                    {
                      renderWidget()
                      clearInterval(_interval);
                    }
                  }, 1000);
                }
                else
                {
                  renderWidget();
                }
              }, 0);
            </script>
          </div>
        </div>
      </li>
      <li class="form-line jf-required" data-type="control_email" id="id_31"><label class="form-label form-label-left" id="label_31" for="input_31" aria-hidden="false"> Promoter Email<span class="form-required">*</span> </label>
        <div id="cid_31" class="form-input jf-required" data-layout="half"> <input type="email" id="input_31" name="q31_promoter_email" class="form-textbox validate[required, Email]" data-defaultvalue="" autoComplete="nope" style="width:310px" size="310" placeholder="promoter@example.com" data-component="email" aria-labelledby="label_31" required="" value="" /> </div>
      </li>
      <li class="form-line jf-required" data-type="control_fullname" id="id_65" data-compound-hint="First,Last"><label class="form-label form-label-left form-label-auto" id="label_65" for="first_65" aria-hidden="false"> Promoter Name<span class="form-required">*</span> </label>
        <div id="cid_65" class="form-input jf-required" data-layout="full">
          <div data-wrapper-react="true"><span class="form-sub-label-container" style="vertical-align:top" data-input-type="first"><input type="text" id="first_65" name="q65_promoter_name[first]" class="form-textbox validate[required]" data-defaultvalue="" autoComplete="nope" size="10" placeholder="First" data-component="first" aria-labelledby="label_65" required="" value="" /></span><span class="form-sub-label-container" style="vertical-align:top" data-input-type="last"><input type="text" id="last_65" name="q65_promoter_name[last]" class="form-textbox validate[required]" data-defaultvalue="" autoComplete="nope" size="15" placeholder="Last" data-component="last" aria-labelledby="label_65" required="" value="" /></span></div>
        </div>
      </li>
      <li class="form-line always-hidden" data-type="control_textbox" id="id_71"><label class="form-label form-label-left form-label-auto" id="label_71" for="input_71" aria-hidden="false"> ename </label>
        <div id="cid_71" class="form-input always-hidden" data-layout="half"> <input type="text" id="input_71" name="q71_ename" data-type="input-textbox" class="form-textbox" data-defaultvalue="" autoComplete="nope" style="width:310px" size="310" data-component="textbox" aria-labelledby="label_71" value="" /> </div>
      </li>
      <li class="form-line" data-type="control_divider" id="id_37">
        <div id="cid_37" class="form-input-wide" data-layout="full">
          <div class="divider" data-component="divider" style="border-bottom-width:1px;border-bottom-style:solid;border-color:#4c72fb;height:1px;margin-left:0px;margin-right:0px;margin-top:0px;margin-bottom:0px"></div>
        </div>
      </li>
      <li class="form-line form-line-column form-col-1 jf-required" data-type="control_textbox" id="id_66"><label class="form-label form-label-top" id="label_66" for="input_66" aria-hidden="false"> Lead First Name<span class="form-required">*</span> </label>
        <div id="cid_66" class="form-input-wide jf-required" data-layout="half"> <input type="text" id="input_66" name="q66_first_name" data-type="input-textbox" class="form-textbox validate[required]" data-defaultvalue="" autoComplete="nope" style="width:310px" size="310" placeholder="John" data-component="textbox" aria-labelledby="label_66" required="" value="" /> </div>
      </li>
      <li class="form-line form-line-column form-col-2 jf-required" data-type="control_textbox" id="id_67"><label class="form-label form-label-top" id="label_67" for="input_67" aria-hidden="false"> Lead Last Name<span class="form-required">*</span> </label>
        <div id="cid_67" class="form-input-wide jf-required" data-layout="half"> <input type="text" id="input_67" name="q67_last_name" data-type="input-textbox" class="form-textbox validate[required]" data-defaultvalue="" autoComplete="nope" style="width:310px" size="310" placeholder="Smith" data-component="textbox" aria-labelledby="label_67" required="" value="" /> </div>
      </li>
      <li class="form-line form-line-column form-col-3" data-type="control_textbox" id="id_85"><label class="form-label form-label-top" id="label_85" for="input_85" aria-hidden="false"> Partner First Name </label>
        <div id="cid_85" class="form-input-wide" data-layout="half"> <input type="text" id="input_85" name="q85_partner_first_name" data-type="input-textbox" class="form-textbox" data-defaultvalue="" autoComplete="nope" style="width:310px" size="310" placeholder="leave blank if empty" data-component="textbox" aria-labelledby="label_85" value="" /> </div>
      </li>
      <li class="form-line form-line-column form-col-4" data-type="control_textbox" id="id_84"><label class="form-label form-label-top" id="label_84" for="input_84" aria-hidden="false"> Partner Last Name </label>
        <div id="cid_84" class="form-input-wide" data-layout="half"> <input type="text" id="input_84" name="q84_partner_last_name" data-type="input-textbox" class="form-textbox" data-defaultvalue="" autoComplete="nope" style="width:310px" size="310" placeholder="leave blank if same" data-component="textbox" aria-labelledby="label_84" value="" /> </div>
      </li>
      <li class="form-line always-hidden" data-type="control_textbox" id="id_96"><label class="form-label form-label-left form-label-auto" id="label_96" for="input_96" aria-hidden="false"> cname2 </label>
        <div id="cid_96" class="form-input always-hidden" data-layout="half"> <input type="text" id="input_96" name="q96_cname2" data-type="input-textbox" class="form-readonly form-textbox" data-defaultvalue="" autoComplete="nope" style="width:310px" size="310" tabindex="-1" data-component="textbox" aria-labelledby="label_96" readonly="" value="" /> </div>
      </li>
      <li class="form-line jf-required" data-type="control_phone" id="id_4"><label class="form-label form-label-left" id="label_4" for="input_4_full"> Phone Number<span class="form-required">*</span> </label>
        <div id="cid_4" class="form-input jf-required" data-layout="half"> <span class="form-sub-label-container" style="vertical-align:top"><input type="tel" id="input_4_full" name="q4_phoneNumber[full]" data-type="mask-number" class="mask-phone-number form-textbox validate[required, Fill Mask]" data-defaultvalue="" autoComplete="nope" style="width:310px" data-masked="true" placeholder="(000) 000-0000" data-component="phone" aria-labelledby="label_4" required="" value="" /></span> </div>
      </li>
      <li class="form-line" data-type="control_divider" id="id_53">
        <div id="cid_53" class="form-input-wide" data-layout="full">
          <div class="divider" data-component="divider" style="border-bottom-width:1px;border-bottom-style:solid;border-color:#4c72fb;height:1px;margin-left:0px;margin-right:0px;margin-top:0px;margin-bottom:0px"></div>
        </div>
      </li>
      <li class="form-line jf-required" data-type="control_widget" id="id_98"><label class="form-label form-label-left" id="label_98" for="input_98" aria-hidden="false"> Address<span class="form-required">*</span> </label>
        <div id="cid_98" class="form-input jf-required" data-layout="full">
          <div data-widget-name="Address" style="width:100%;text-align:Left;overflow-x:auto" data-component="widget-field"><iframe data-client-id="52933bf13be147110a000005" title="Address" frameBorder="0" scrolling="no" allowtransparency="true" allow="geolocation; microphone; camera; autoplay; encrypted-media; fullscreen" data-type="iframe" class="custom-field-frame" id="customFieldFrame_98" src="" style="max-width:900px;border:none;width:100%;height:40px" data-width="900" data-height="40"></iframe>
            <div class="widget-inputs-wrapper"><input id="input_98" class="form-hidden form-widget widget-required " type="hidden" name="q98_address" value="" /><input id="widget_settings_98" class="form-hidden form-widget-settings" type="hidden" data-version="2" value="%5B%7B%22name%22%3A%22color%22%2C%22value%22%3A%22Black%22%7D%2C%7B%22name%22%3A%22placeholder%22%2C%22value%22%3A%22Appointment%20Address%22%7D%2C%7B%22name%22%3A%22allowedCountry%22%2C%22value%22%3A%22US%22%7D%2C%7B%22name%22%3A%22apiKey%22%2C%22value%22%3A%22AIzaSyCkEeNH7PZlFIKZ5VcrYxz-z0xMfmhH6k4%22%7D%2C%7B%22name%22%3A%22customCSS%22%2C%22value%22%3A%22input%23geocomplete%7B%5Cn%20%20height%3A%202.5em%3B%5Cn%20%20border-radius%3A%205px%3B%5Cn%20%20font-size%3A%201em%3B%5Cn%7D%22%7D%5D" /></div>
            <script type="text/javascript">
              setTimeout(function()
              {
                function renderWidget()
                {
                  var _cFieldFrame = document.getElementById("customFieldFrame_98");
                  if (_cFieldFrame)
                  {
                    _cFieldFrame.onload = function()
                    {
                      if (typeof widgetFrameLoaded !== 'undefined')
                      {
                        widgetFrameLoaded(98,
                        {
                          "formID": 243411793749162
                        }, undefined)
                      }
                    };
                    _cFieldFrame.src = "//widgets.jotform.io/geoComplete/?qid=98&isOpenedInPortal=undefined&isOpenedInAgent=undefined&align=Left&ref=" +
                      encodeURIComponent(window.location.protocol + "//" + window.location.host) + '' + '' + '' +
                      '&injectCSS=' + encodeURIComponent(window.location.search.indexOf("ndt=1") > -1);
                    _cFieldFrame.addClassName("custom-field-frame-rendered");
                  }
                }
                if (false)
                {
                  var _interval = setInterval(function()
                  {
                    var dataMode = document.querySelector('html').getAttribute('data-mode');
                    if (dataMode === 'fillMode')
                    {
                      renderWidget()
                      clearInterval(_interval);
                    }
                  }, 1000);
                }
                else
                {
                  renderWidget();
                }
              }, 0);
            </script>
          </div>
        </div>
      </li>
      <li class="form-line" data-type="control_divider" id="id_89">
        <div id="cid_89" class="form-input-wide" data-layout="full">
          <div class="divider" data-component="divider" style="border-bottom-width:1px;border-bottom-style:solid;border-color:#4c72fb;height:1px;margin-left:0px;margin-right:0px;margin-top:0px;margin-bottom:0px"></div>
        </div>
      </li>
      <li class="form-line" data-type="control_email" id="id_88"><label class="form-label form-label-left form-label-auto" id="label_88" for="input_88" aria-hidden="false"> Lead Email </label>
        <div id="cid_88" class="form-input" data-layout="half"> <input type="email" id="input_88" name="q88_lead_email" class="form-textbox validate[Email]" data-defaultvalue="" autoComplete="nope" style="width:310px" size="310" placeholder="leave blank if empty" data-component="email" aria-labelledby="label_88" value="" /> </div>
      </li>
      <li class="form-line always-hidden" data-type="control_textbox" id="id_97"><label class="form-label form-label-left form-label-auto" id="label_97" for="input_97" aria-hidden="false"> elabel </label>
        <div id="cid_97" class="form-input always-hidden" data-layout="half"> <input type="text" id="input_97" name="q97_elabel" data-type="input-textbox" class="form-readonly form-textbox" data-defaultvalue="" autoComplete="nope" style="width:310px" size="310" tabindex="-1" data-component="textbox" aria-labelledby="label_97" readonly="" value="" /> </div>
      </li>
      <li class="form-line jf-required" data-type="control_radio" id="id_99"><label class="form-label form-label-left form-label-auto" id="label_99" aria-hidden="false"> Did you set an appointment date and time?<span class="form-required">*</span> </label>
        <div id="cid_99" class="form-input jf-required" data-layout="full">
          <div class="form-multiple-column" data-columncount="2" role="group" aria-labelledby="label_99" data-component="radio"><span class="form-radio-item"><span class="dragger-item"></span><input aria-describedby="label_99" type="radio" class="form-radio validate[required]" id="input_99_0" name="q99_setapp" required="" value="Yes" /><label id="label_input_99_0" for="input_99_0">Yes</label></span><span class="form-radio-item"><span class="dragger-item"></span><input aria-describedby="label_99" type="radio" class="form-radio validate[required]" id="input_99_1" name="q99_setapp" required="" value="No" /><label id="label_input_99_1" for="input_99_1">No</label></span></div>
        </div>
      </li>
      <li class="form-line jf-required form-field-hidden" style="display:none;" data-type="control_widget" id="id_41"><label class="form-label form-label-left" id="label_41" for="input_41" aria-hidden="false"> Appointment Day &amp; Time<span class="form-required">*</span> </label>
        <div id="cid_41" class="form-input jf-required" data-layout="full">
          <div data-widget-name="Appointment Day &amp; Time" style="width:100%;text-align:Left;overflow-x:auto" data-component="widget-field"><iframe data-client-id="53201a2d6866be393e000028" title="Appointment Day &amp; Time" frameBorder="0" scrolling="no" allowtransparency="true" allow="geolocation; microphone; camera; autoplay; encrypted-media; fullscreen" data-type="iframe" class="custom-field-frame" id="customFieldFrame_41" src="" style="max-width:400px;border:none;width:100%;height:50px" data-width="400" data-height="50"></iframe>
            <div class="widget-inputs-wrapper"><input id="input_41" class="form-hidden form-widget widget-required " type="hidden" name="q41_day_time" value="" /><input id="widget_settings_41" class="form-hidden form-widget-settings" type="hidden" data-version="2" value="%5B%7B%22name%22%3A%22list%22%2C%22value%22%3A%22.%5Cn*Monday%5Cn%20.%5Cn%2012%20pm%5Cn%203%20pm%5Cn%206%20pm%5Cn*Tuesday%5Cn%20.%5Cn%209%20am%5Cn%2012%20pm%5Cn%203%20pm%5Cn%206%20pm%5Cn*Wednesday%5Cn%20.%5Cn%209%20am%5Cn%2012%20pm%5Cn%203%20pm%5Cn%206%20pm%5Cn*Thursday%5Cn%20.%5Cn%209%20am%5Cn%2012%20pm%5Cn%203%20pm%5Cn%206%20pm%5Cn*Friday%5Cn%20.%5Cn%2012%20pm%5Cn%203%20pm%5Cn%206%20pm%5Cn*Saturday%5Cn%20.%5Cn%209%20am%5Cn%2012%20pm%5Cn%203%20pm%22%7D%5D" /></div>
            <script type="text/javascript">
              setTimeout(function()
              {
                function renderWidget()
                {
                  var _cFieldFrame = document.getElementById("customFieldFrame_41");
                  if (_cFieldFrame)
                  {
                    _cFieldFrame.onload = function()
                    {
                      if (typeof widgetFrameLoaded !== 'undefined')
                      {
                        widgetFrameLoaded(41,
                        {
                          "formID": 243411793749162
                        }, undefined)
                      }
                    };
                    _cFieldFrame.src = "//app-widgets.jotform.io/dynamicDropdowns/?qid=41&isOpenedInPortal=undefined&isOpenedInAgent=undefined&align=Left&ref=" +
                      encodeURIComponent(window.location.protocol + "//" + window.location.host) + '' + '' + '' +
                      '&injectCSS=' + encodeURIComponent(window.location.search.indexOf("ndt=1") > -1);
                    _cFieldFrame.addClassName("custom-field-frame-rendered");
                  }
                }
                if (false)
                {
                  var _interval = setInterval(function()
                  {
                    var dataMode = document.querySelector('html').getAttribute('data-mode');
                    if (dataMode === 'fillMode')
                    {
                      renderWidget()
                      clearInterval(_interval);
                    }
                  }, 1000);
                }
                else
                {
                  renderWidget();
                }
              }, 0);
            </script>
          </div>
        </div>
      </li>
      <li class="form-line jf-required form-field-hidden" style="display:none;" data-type="control_datetime" id="id_27"><label class="form-label form-label-left form-label-auto" id="label_27" for="lite_mode_27" aria-hidden="false"> Appointment Date<span class="form-required">*</span> </label>
        <div id="cid_27" class="form-input jf-required" data-layout="half">
          <div data-wrapper-react="true">
            <div style="display:none"><span class="form-sub-label-container" style="vertical-align:top"><input class="form-textbox validate[required, disallowPast, limitDate]" id="month_27" name="q27_date[month]" type="tel" size="2" data-maxlength="2" data-age="" maxLength="2" required="" autoComplete="off" aria-labelledby="label_27 sublabel_27_month" value="" /><span class="date-separate" aria-hidden="true"> /</span><label class="form-sub-label" for="month_27" id="sublabel_27_month" style="min-height:13px">Month</label></span><span class="form-sub-label-container" style="vertical-align:top"><input class="form-textbox validate[required, disallowPast, limitDate]" id="day_27" name="q27_date[day]" type="tel" size="2" data-maxlength="2" data-age="" maxLength="2" required="" autoComplete="off" aria-labelledby="label_27 sublabel_27_day" value="" /><span class="date-separate" aria-hidden="true"> /</span><label class="form-sub-label" for="day_27" id="sublabel_27_day" style="min-height:13px">Day</label></span><span class="form-sub-label-container" style="vertical-align:top"><input class="form-textbox validate[required, disallowPast, limitDate]" id="year_27" name="q27_date[year]" type="tel" size="4" data-maxlength="4" data-age="" maxLength="4" required="" autoComplete="off" aria-labelledby="label_27 sublabel_27_year" value="" /><label class="form-sub-label" for="year_27" id="sublabel_27_year" style="min-height:13px">Year</label></span></div><span class="form-sub-label-container" style="vertical-align:top"><input class="form-textbox validate[required, disallowPast, limitDate, validateLiteDate]" id="lite_mode_27" type="text" size="12" data-maxlength="12" maxLength="12" data-age="" required="" data-format="mmddyyyy" data-seperator="/" placeholder="MM/DD/YYYY" data-placeholder="MM/DD/YYYY" autoComplete="off" aria-labelledby="label_27" value="" /><button type="button" class=" newDefaultTheme-dateIcon focusable icon-liteMode" id="input_27_pick" data-component="datetime" aria-hidden="true" data-allow-time="No" data-version="v2"></button><label class="form-sub-label is-empty" for="lite_mode_27" id="sublabel_27_litemode" style="min-height:13px"></label></span>
          </div>
        </div>
      </li>
      <li class="form-line" data-type="control_divider" id="id_54">
        <div id="cid_54" class="form-input-wide" data-layout="full">
          <div class="divider" data-component="divider" style="border-bottom-width:1px;border-bottom-style:solid;border-color:#4c72fb;height:1px;margin-left:0px;margin-right:0px;margin-top:0px;margin-bottom:0px"></div>
        </div>
      </li>
      <li class="form-line" data-type="control_textarea" id="id_10"><label class="form-label form-label-left form-label-auto" id="label_10" for="input_10" aria-hidden="false"> Notes </label>
        <div id="cid_10" class="form-input" data-layout="full"> <textarea id="input_10" class="form-textarea" name="q10_notes" style="width:648px;height:163px" data-component="textarea" aria-labelledby="label_10"></textarea> </div>
      </li>
      <li class="form-line jf-required" data-type="control_radio" id="id_101"><label class="form-label form-label-left form-label-auto" id="label_101" aria-hidden="false"> Did you make sure to fill top section of lead sheet? (Date, Promoter, Event Name)<span class="form-required">*</span> </label>
        <div id="cid_101" class="form-input jf-required" data-layout="full">
          <div class="form-multiple-column" data-columncount="2" role="group" aria-labelledby="label_101" data-component="radio"><span class="form-radio-item"><span class="dragger-item"></span><input aria-describedby="label_101" type="radio" class="form-radio validate[required]" id="input_101_0" name="q101_typeA101" required="" value="Yes" /><label id="label_input_101_0" for="input_101_0">Yes</label></span><span class="form-radio-item"><span class="dragger-item"></span><input aria-describedby="label_101" type="radio" class="form-radio validate[required]" id="input_101_1" name="q101_typeA101" required="" value="No" /><label id="label_input_101_1" for="input_101_1">No</label></span></div>
        </div>
      </li>
      <li class="form-line always-hidden" data-type="control_textbox" id="id_70"><label class="form-label form-label-left form-label-auto" id="label_70" for="input_70" aria-hidden="false"> n </label>
        <div id="cid_70" class="form-input always-hidden" data-layout="half"> <input type="text" id="input_70" name="q70_n" data-type="input-textbox" class="form-textbox" data-defaultvalue="" autoComplete="nope" style="width:310px" size="310" data-component="textbox" aria-labelledby="label_70" value="" /> </div>
      </li>
      <li class="form-line jf-required" data-type="control_fileupload" id="id_15"><label class="form-label form-label-left form-label-auto" id="label_15" for="input_15" aria-hidden="false"> Lead Sheet Picture<span class="form-required">*</span> </label>
        <div id="cid_15" class="form-input jf-required" data-layout="full">
          <div class="jfQuestion-fields" data-wrapper-react="true">
            <div class="jfField isFilled">
              <div class="jfUpload-wrapper">
                <div class="jfUpload-container">
                  <div class="jfUpload-button-container">
                    <div class="jfUpload-button" aria-hidden="true" tabindex="0" style="display:none" data-version="v2">Upload Lead Sheet<div class="jfUpload-heading forDesktop">Drag and drop files here</div>
                      <div class="jfUpload-heading forMobile">Choose a file</div>
                    </div>
                  </div>
                </div>
                <div class="jfUpload-files-container">
                  <div class="validate[multipleUpload]"><input type="file" id="input_15" name="q15_lead_sheet[]" multiple="" class="form-upload-multiple validate[required]" data-imagevalidate="yes" data-file-accept="pdf, jpg, jpeg, png" data-limit-file-size="No" data-file-maxsize="10854" data-file-minsize="0" data-file-limit="1" data-component="fileupload" required="" aria-label="Upload Lead Sheet" /></div>
                </div>
              </div><span class="form-sub-label-container" style="vertical-align:top"><label class="form-sub-label" for="input_15" id="sublabel_input_15" style="min-height:13px">Please double check all form information is entered correctly. </label></span>
            </div><span style="display:none" class="cancelText">Cancel</span><span style="display:none" class="ofText">of</span>
          </div>
        </div>
      </li>
      <li class="form-line always-hidden jf-required" data-type="control_widget" id="id_100"><label class="form-label form-label-left" id="label_100" for="input_100" aria-hidden="false"> Lead Sheet Picture<span class="form-required">*</span> </label>
        <div id="cid_100" class="form-input always-hidden jf-required" data-layout="full">
          <div data-widget-name="Lead Sheet Picture" style="width:100%;text-align:Left;overflow-x:auto" data-component="widget-field"><iframe data-client-id="5295b800485bd19f5d000005" title="Lead Sheet Picture" frameBorder="0" scrolling="no" allowtransparency="true" allow="geolocation; microphone; camera; autoplay; encrypted-media; fullscreen" data-type="iframe" class="custom-field-frame" id="customFieldFrame_100" src="" style="max-width:300px;border:none;width:100%;height:120px" data-width="300" data-height="120"></iframe>
            <div class="widget-inputs-wrapper"><input id="input_100" class="form-hidden form-widget widget-required " type="hidden" name="q100_typeA" value="" /><input id="widget_settings_100" class="form-hidden form-widget-settings" type="hidden" data-version="2" value="%5B%7B%22name%22%3A%22buttontitle%22%2C%22value%22%3A%22Upload%20Lead%20Sheet%22%7D%2C%7B%22name%22%3A%22uploadtitle%22%2C%22value%22%3A%22Upload%20Image%22%7D%5D" /></div>
            <script type="text/javascript">
              setTimeout(function()
              {
                function renderWidget()
                {
                  var _cFieldFrame = document.getElementById("customFieldFrame_100");
                  if (_cFieldFrame)
                  {
                    _cFieldFrame.onload = function()
                    {
                      if (typeof widgetFrameLoaded !== 'undefined')
                      {
                        widgetFrameLoaded(100,
                        {
                          "formID": 243411793749162
                        }, undefined)
                      }
                    };
                    _cFieldFrame.src = "//app-widgets.jotform.io/imagepreview/?qid=100&isOpenedInPortal=undefined&isOpenedInAgent=undefined&align=Left&ref=" +
                      encodeURIComponent(window.location.protocol + "//" + window.location.host) + '' + '' + '' +
                      '&injectCSS=' + encodeURIComponent(window.location.search.indexOf("ndt=1") > -1);
                    _cFieldFrame.addClassName("custom-field-frame-rendered");
                  }
                }
                if (false)
                {
                  var _interval = setInterval(function()
                  {
                    var dataMode = document.querySelector('html').getAttribute('data-mode');
                    if (dataMode === 'fillMode')
                    {
                      renderWidget()
                      clearInterval(_interval);
                    }
                  }, 1000);
                }
                else
                {
                  renderWidget();
                }
              }, 0);
            </script>
          </div>
        </div>
      </li>
      <li class="form-line" data-type="control_button" id="id_14">
        <div id="cid_14" class="form-input-wide" data-layout="full">
          <div data-align="center" class="form-buttons-wrapper form-buttons-center   jsTest-button-wrapperField"><button id="input_14" type="submit" class="form-submit-button form-submit-button-orange-500 submit-button jf-form-buttons jsTest-submitField legacy-submit" data-component="button" data-content="">Submit</button></div>
        </div>
      </li>
      <li style="clear:both"></li>
      <li style="display:none">Should be Empty: <input type="text" name="website" value="" type="hidden" /></li>
    </ul>
  </div>
  <script>
    JotForm.showJotFormPowered = "0";
  </script>
  <script>
    JotForm.poweredByText = "Powered by Jotform";
  </script><input type="hidden" class="simple_spc" id="simple_spc" name="simple_spc" value="243411793749162" />
  <script type="text/javascript">
    var all_spc = document.querySelectorAll("form[id='243411793749162'] .si" + "mple" + "_spc");
    for (var i = 0; i < all_spc.length; i++)
    {
      all_spc[i].value = "243411793749162-243411793749162";
    }
  </script>
</form>
`

const Form: React.FC = () => {
  return (
  <div dangerouslySetInnerHTML={{ __html: html }}></div>

  )
}
export default Form;
