// inverse-analytics.js

(function () {
    // Check if analytics is already initialized
    if (window.inverseAnalytics) {
        console.warn("Inverse Analytics is already initialized.");
        return;
    }

    // Create an object for analytics
    window.inverseAnalytics = {
        init: function (trackingId) {
            console.log(`Initializing Inverse Analytics with Tracking ID: ${trackingId}`);
            this.trackingId = trackingId;
        },
        trackEvent: function (category, action, label, value) {
            console.log(`Tracking Event - Category: ${category}, Action: ${action}, Label: ${label}, Value: ${value}`);
            // Send the event data to your server or analytics endpoint
            fetch("/analytics/track", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    trackingId: this.trackingId,
                    category: category,
                    action: action,
                    label: label,
                    value: value
                })
            }).then(response => response.json())
              .then(data => console.log("Event tracked successfully:", data))
              .catch(error => console.error("Error tracking event:", error));
        }
    };

    // Auto-initialize with a default Tracking ID if provided
    const defaultTrackingId = "YOUR_DEFAULT_TRACKING_ID";
    if (defaultTrackingId) {
        window.inverseAnalytics.init(defaultTrackingId);
    }
})();
