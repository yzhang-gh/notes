# 驾照

<style>
    span.l1 {
        display: block;
        padding-left: 5px;
        padding-bottom: 1px;
        background: #EAE2B7;
    }
    span.l2 {
        display: block;
        padding-left: 5px;
        padding-bottom: 1px;
        background: #FCBF49 40%;
    }
    span.l3 {
        display: block;
        padding-left: 5px;
        padding-bottom: 1px;
        background: #F77F00 40%;
    }
    span.l4 {
        display: block;
        padding-left: 5px;
        padding-bottom: 1px;
        background: #D62828 40%;
    }
    span.l5 {
        display: block;
        padding-left: 5px;
        padding-bottom: 1px;
        background: #003049 40%;
        color: white;
        /* background: linear-gradient(to top, #003049 40%, transparent 40%); */
    }
</style>

## 考试内容

- **科目一**：理论考试（道路交通安全法律、法规和相关知识考试科目）
- **科目二**：场地驾驶技能考试
  - 直角转弯
  - 曲线行驶
  - 侧方停车
  - 倒车入库
- **科目三**
  - 道路驾驶技能考试
  - 安全文明驾驶常识考试（俗称**科目四**）

## 科目一

C1、C2、C5 [准驾车型](https://zh.wikipedia.org/zh-cn/%E4%B8%AD%E8%8F%AF%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9C%8B%E6%A9%9F%E5%8B%95%E8%BB%8A%E9%A7%95%E9%A7%9B%E8%AD%89#%E5%87%86%E9%A9%BE%E8%BD%A6%E5%9E%8B)科目一考试内容

| 试题内容                   | 组卷比例 |
| -------------------------- | -------- |
| 驾驶证和机动车管理规定     | 20%      |
| 道路通行条件及通行规定     | 25%      |
| 道路交通安全违法行为及处罚 | 25%      |
| 道路交通事故处理相关规定   | 10%      |
| 机动车基础知识             | 10%      |
| 地方性法规                 | 10%      |
| 合计                       | 100%     |

### 扣分

高速公路：慢 3 占 6 停 9 逆 12

- 高速公路不按规定车道行驶，一次记 3 分

<!--  -->

- 不按规定会车，或者在普通公路上不按规定倒车、掉头，一次记 1 分
- 不按规定超车、让行，或者在普通公路上逆行，一次记 3 分
- 前方车辆排队时，借道超车、穿插，一次记 3 分
- 不按规定避让校车，一次记 3 分 （TODO 行人）
- 不按规定使用灯光，一次记 3 分

#### 超速

<table>
    <thead>
        <tr>
            <th>车辆类别</th>
            <th>道路类别</th>
            <th>&lt; 10%</th>
            <th>10% - 20%</th>
            <th>20% - 50%</th>
            <th>&gt; 50%</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="2">普通车辆*</td>
            <td>普通公路</td>
            <td>-</td>
            <td>-</td>
            <td><span class="l2">3</span></td>
            <td><span class="l3">6</span></td>
        </tr>
        <tr>
            <td>城市快速路<br>高速公路</td>
            <td>-</td>
            <td>-</td>
            <td><span class="l3">6</span></td>
            <td><span class="l5">12</span></td>
        </tr>
        <tr>
            <td rowspan="2">校车、客车<br>货车、危险品车</td>
            <td>普通公路</td>
            <td>-</td>
            <td><span class="l1">1</span></td>
            <td><span class="l3">6</span></td>
            <td><span class="l4">9</span></td>
        </tr>
        <tr>
            <td>城市快速路<br>高速公路</td>
            <td colspan="2"><span class="l3">6</span></td>
            <td colspan="2"><span class="l5">12</span></td>
        </tr>
    </tbody>
</table>

\*普通车辆在题目中的表述一般为 xxx 以外的车辆

#### 超载

<table>
    <thead>
        <tr>
            <th>车辆类别</th>
            <th>&lt; 20%</th>
            <th>20% - 50%</th>
            <th>50% - 100%</th>
            <th>&gt; 100%</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>7 座以下载客汽车</td>
            <td>-</td>
            <td><span class="l2">3</span></td>
            <td><span class="l3">6</span></td>
            <td><span class="l5">12</span></td>
        </tr>
        <tr>
            <td>7 座以上载客汽车（例如公司班车）</td>
            <td>-</td>
            <td><span class="l3">6</span></td>
            <td><span class="l4">9</span></td>
            <td><span class="l5">12</span></td>
        </tr>
        <tr>
            <td>校车、公路客运汽车、旅游客运汽车</td>
            <td><span class="l3">6</span></td>
            <td colspan="3"><span class="l5">12</span></td>
        </tr>
    </tbody>
</table>

#### 超重（载货汽车）

| < 30%                     | 30% - 50%                 | > 50%                     |
| ------------------------- | ------------------------- | ------------------------- |
| <span class="l1">1</span> | <span class="l2">3</span> | <span class="l3">6</span> |

- 超长，超宽，超高，一次记 1 分
- 未按指定时间、路线、速度行驶，或者未悬挂警示标志的，一次记 6 分

#### 逃逸

| 轻微伤或财产损失          | 轻伤以上或死亡             |
| ------------------------- | -------------------------- |
| <span class="l3">6</span> | <span class="l5">12</span> |

#### 机动车号牌

| 安装不规范                | 故意未悬挂、遮挡、污损    | 伪造、变造                 |
| ------------------------- | ------------------------- | -------------------------- |
| <span class="l2">3</span> | <span class="l4">9</span> | <span class="l5">12</span> |

疲劳驾驶：3 9

### 罚款

罚款：贿赂 2000 以下 虚假 1000 以下 隐瞒 500 以下

有罚款选罚款

有 200-2000 直接选

### 车速

高速公路，城市道路等...

高速公路恶劣天气

- 261 能见度 200 米，车速不超过 60 公里每小时，车距 100 米
- 145 能见度 100 米，车速不超过 40 公里每小时，车距 50 米
- 520 能见度 50 米，车速不超过 20 公里每小时，最近出口尽快驶离

### 刑罚

### 年份日期

假 1 骗 3 醉 5 未 10 逃终生

- 醉酒驾驶营运机动车，10 年

<table>
    <thead>
        <tr style="text-align: left">
            <th>重大事故，致人重伤、死亡<br>或者使公私财产遭受重大损失</th>
            <th>肇事后逃逸<br>或者有其它特别恶劣情节的</th>
            <th>逃逸致人死亡的</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>&lt; 3</td>
            <td>3 - 7</td>
            <td>&gt; 7</td>
        </tr>
    </tbody>
</table>

## 科目二

方向盘与倒车方向的关系

看后视镜

## 科目三

判断车的位置
