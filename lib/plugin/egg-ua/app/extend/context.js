module.exports = {
    get isIOS() {
        const iosReg = /iphone|ipad|ipod/i;
        console.log('context',this)
        return iosReg.test(this.get('user-agent'));
    },
};