module.exports = {
    get isIOS2() {
        const iosReg = /iphone|ipad|ipod/i;
        console.log('context',this)
        return iosReg.test(this.get('user-agent'));
    },
};