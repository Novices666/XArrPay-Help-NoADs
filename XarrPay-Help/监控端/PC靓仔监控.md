
# 靓仔PC监控
::: tip
本文挂机宝配置：2+2

Windows Server 2016 Datacenter 64-bit (10.0, Build 14393)
:::
## 安装运行
::: tip
软件下载请到售后群文件夹
:::
下载后得到一个压缩包，将压缩包解压到单独文件夹中，双击运行`Pc自挂服务端.exe`

![](https://s2.loli.net/2025/04/01/cuRWkYGbDygBpos.png)
## 配置
### XArrPay设置
在管理后台>`系统设置`>`通知管理`中打开`即时消息`下的`创建订单`开关。

![](https://s2.loli.net/2025/04/01/8oFavrkHymTqiVI.png)

确保`默认模板`/`自定义模板`模板中包含`订单金额:{{amount}}`，注意此处的`:`为英文模式下的冒号

现成模板
```
订单号: {{order_id}}<br>
商户订单号: {{out_order_id}}<br>
订单金额: {{amount}}<br>
创建时间: {{create_time}}<br>
```
### 软件配置
点击软件中的`软件配置`

填写`商户地址`、`商户ID`、`商户密钥`。

后台对应的信息如下，需要注意的是`商户地址`只填写`http://商户地址`，不需要后面的`/xpay/epay/`

::: tip
新版本已增加一键导入
- 个人版：`账号管理`>`Api设置`>`复制平台信息`
- 商户版：`商户后台`>`API`>`复制信息`

![](https://s2.loli.net/2025/04/01/vEOhW1V2HCm7bqB.png)

然后点击软件中的`一键导入信息`
:::

点击`保存商户信息`

![](https://s2.loli.net/2025/04/01/9kucmOfCP2ToSiH.png)

在商户后台>`账号管理`>`个人中心`>`基本信息`中复制`消息同步密钥`，填写进软件`消息同步密钥`中。
![](https://s2.loli.net/2025/04/01/S7Jvo6RyWO3MAEl.png)

勾选`启用wss消息同步`，点击`连接WSS`

![](https://s2.loli.net/2025/04/01/PLpJwEOG1joT8mh.png)

连接成功后如下图，按钮会变为`已连接`且不可点击

![](https://s2.loli.net/2025/04/01/embf75QFnVSYGhD.png)
## 微信配置
按照软件提示下载并安装适配的微信版本

![](https://s2.loli.net/2025/04/01/CVjthfAecqYmisP.png)

配套插件如下，配置使用同监控端插件。

![](https://s2.loli.net/2025/04/01/qBcf6vORKGAVN8y.png)

## 支付宝配置
配套插件如下，配置使用同监控端插件。

![](https://s2.loli.net/2025/04/01/caqifBXnhNEwuK4.png)

## 添加监控账号
在`软件配置`>`账户管理`中右键，即可添加账户。

![](https://s2.loli.net/2025/04/01/8xmwvKfJQzoRM4Y.png)

首次使用请点击`屏蔽微信更新`。

添加账号方式如下，添加完成后请点击`刷新账号列表`来更新列表。

### 添加支付宝账号
点击`添加支付宝账号`后，会弹出二维码，扫码登录即可。

![](https://s2.loli.net/2025/04/01/1CsluFTXyqo48hn.png)

### 添加微信账号
点击`添加微信账号`后，会打开微信，扫码登录即可。
首次登录会同步数据，等待片刻即可。

![](https://s2.loli.net/2025/04/01/bfAKIQdM6UzT1wL.png)


