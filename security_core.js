/**
 * ==========================================================================
 *   Supreme Islamic Encyclopedia - Absolute Native Security Core Matrix 2026
 *   Proprietary Custom Code - Strict Anti-Theft & Integrity Protection
 * ==========================================================================
 */

(function() {
    'use strict';

    // 1. منظومة قفل الاختصارات وحظر التحديد والنسخ بشكل قطعي
    function instantiateStructuralProtection() {
        // حظر القائمة المنسدلة للزر الأيمن والضغط المطول على الهواتف
        document.addEventListener('contextmenu', (event) => {
            event.preventDefault();
            return false;
        }, true);

        // حظر تحديد النصوص كلياً عبر المتصفح المحاكي للهاتف
        document.addEventListener('selectstart', (event) => {
            event.preventDefault();
            return false;
        }, true);

        // حظر عمليات النسخ والقص واللصق لمنع سرقة المتون الشرعية
        document.addEventListener('copy', (event) => {
            event.preventDefault();
            return false;
        }, true);
        
        document.addEventListener('cut', (event) => {
            event.preventDefault();
            return false;
        }, true);

        // حظر لوحة المفاتيح واختصارات سحب السورس كود (F12, Ctrl+U, Ctrl+Shift+I)
        document.addEventListener('keydown', (event) => {
            // حظر مفتاح F12
            if (event.keyCode === 123) {
                event.preventDefault();
                return false;
            }
            // حظر Ctrl+U (عرض مصدر الصفحة)
            if (event.ctrlKey && event.keyCode === 85) {
                event.preventDefault();
                return false;
            }
            // حظر Ctrl+Shift+I و Ctrl+Shift+J (أدوات المطورين)
            if (event.ctrlKey && event.shiftKey && (event.keyCode === 73 || event.keyCode === 74)) {
                event.preventDefault();
                return false;
            }
            // حظر Ctrl+S (حفظ الصفحة) و Ctrl+C (النسخ)
            if (event.ctrlKey && (event.keyCode === 83 || event.keyCode === 67)) {
                event.preventDefault();
                return false;
            }
        }, true);
    }

    // 2. محرك كسر وتجميد أدوات الاختراق والفحص (Anti-Debugging Engine)
    function launchAntiDebuggerMatrix() {
        function dynamicDeobfuscationCheck() {
            const startTime = performance.now();
            // حقن نقطة توقف برمجية ذاتية روتينية تنهك برامج الفحص الخارجيه
            debugger;
            const endTime = performance.now();
            
            // إذا استغرق التنفيذ أكثر من 100 مللي ثانية، فهناك أداة فحص تراقب التطبيق الحين
            if (endTime - startTime > 100) {
                document.body.innerHTML = "<div style='text-align:center;padding-top:100px;font-family:sans-serif;color:#c0392b;'><h2>🚨 تنبيه أمني صارم</h2><p>تم رصد بيئة فحص غير آمنة. تم إيقاف المنظومة البرمجية فوراً لحماية البيانات الموثقة.</p></div>";
                throw new Error("Security Violation: Debugger Detected!");
            }
        }
        
        // تشغيل الفحص الذاتي المجهري كل ثانية بشكل مستمر وصامت
        setInterval(dynamicDeobfuscationCheck, 1000);
    }

    // 3. درع الحماية من اللمس العشوائي والتشويه عند تصوير الشاشة (Native Shield)
    function initializePrivacyViewport() {
        document.addEventListener('deviceready', () => {
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.privacyScreen) {
                try {
                    window.cordova.plugins.privacyScreen.enable();
                    console.log("Absolute Privacy Shield Activated Successfully.");
                } catch (e) {
                    console.error("Privacy Shield Core Initialization Failed: " + e);
                }
            }
        }, false);
    }

    // إطلاق مصفوفة الأمان الشاملة فور تحميل بنية المستند
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            instantiateStructuralProtection();
            launchAntiDebuggerMatrix();
            initializePrivacyViewport();
        });
    } else {
        instantiateStructuralProtection();
        launchAntiDebuggerMatrix();
        initializePrivacyViewport();
    }
})();
