## 1.7.6（2021-06-02）
1.支持全局错误处理，通过`uni.$emit('z-paging-error-emit');`可全局处理请求失败情况。  
2.提升在低版本webView中的兼容性。  
3.修复`empty-view-title-style`配置无效的问题。
## 1.7.5（2021-06-02）
1.支持全局错误处理，通过`uni.$emit('z-paging-error-emit');`可全局处理请求失败情况。  
2.提升在低版本webView中的兼容性。  
3.修复`empty-view-title-style`配置无效的问题。  
## 1.7.4（2021-06-02）
1.修复在ios中，因scroll-view bounce的影响，滚动到顶部无法立即下拉的问题。  
2.新增scroll-view 滚动到顶部事件监听；新增`scrollIntoViewByNodeTop`，支持传入节点top以滚动到指定节点位置。  
3.修复在支付宝/钉钉小程序中，下拉刷新时顶部有个灰色方块闪烁一下的BUG。  
4.修复`empty-view-img`配置无效的BUG。  
5.展示最后刷新时间，若非今日或昨日，则展示最后刷新日期+时间。  
6.新增`refresher-out-rate`，支持设置自定义下拉刷新下拉超出阈值后继续下拉位移衰减的比例。
## 1.7.3（2021-05-31）
1.在nvue中，支持页面滚动。  
2.在nvue中，支持点击返回顶部功能。  
3.修复在支付宝/钉钉小程序中，下拉刷新时顶部有个灰色方块闪烁一下的BUG。
