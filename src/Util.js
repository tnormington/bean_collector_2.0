const Util = {
    getResourceName(resource) {
        if(resource === 'BPS') return resource;
        const result = resource.replace( /([A-Z])/g, " $1" );
        return result.charAt(0).toUpperCase() + result.slice(1);
    }
}

export default Util;