// logs.ts
// const util = require('../../utils/util.js')
import { formatTime } from '../../utils/util';
Page({
    data: {
        logs: [],
    },
    onLoad() {
        this.setData({
            logs: (wx.getStorageSync('logs') || []).map((log) => {
                return formatTime(new Date(log));
            }),
        });
    },
});
//# sourceMappingURL=logs.js.map