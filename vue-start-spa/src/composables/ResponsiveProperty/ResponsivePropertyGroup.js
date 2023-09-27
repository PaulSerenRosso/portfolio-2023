

export class ResponsivePropertyGroup {
    constructor(mobileResponsiveProperty, tabletResponsiveProperty,desktopResponsiveProperty,largeDesktopResponsiveProperty ) {
        this.responsivePropertyGroup = [mobileResponsiveProperty, tabletResponsiveProperty, desktopResponsiveProperty, largeDesktopResponsiveProperty];
        this.onMediaQueryMatches = {};
    }
    addResponsiveProperty(key, responsiveProperty) {
        this.responsivePropertyGroup[key] = responsiveProperty;
    }
    setOnMediaQueryMatches(onMediaQueryMatches){
        this.onMediaQueryMatches = onMediaQueryMatches;
    }
    raiseOnMediaQueryMatches(devicePlateformId) {
       this.onMediaQueryMatches(this.responsivePropertyGroup[devicePlateformId]);
    }
}