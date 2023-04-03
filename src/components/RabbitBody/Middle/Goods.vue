<template>
  <div class="goods-container">
    <!-- 新鲜好物 -->
    <div class="xtx_goods_new xtx_panel">
      <div class="wrapper">
        <!-- 面板头部 -->
        <div class="xtx_panel_header">
          <h3>新鲜好物<small>新鲜出炉 品质靠谱</small></h3>
          <a href="javascript:;" class="more">
            查看全部<i class="sprites"></i>
          </a>
        </div>
        <!-- 商品列表 -->
        <div class="xtx_panel_goods_1">
          <a href="javascript:;">
            <img src="@/assets/rabbitPic/uploads/new_goods_1.jpg" alt="" />
            <span class="name">睿米无线吸尘器F8</span>
            <span class="price"><small>￥</small>899</span>
          </a>
          <a href="javascript:;">
            <img src="@/assets/rabbitPic/uploads/new_goods_2.jpg" alt="" />
            <span class="name">智能环绕3D空调</span>
            <span class="price"><small>￥</small>1299</span>
          </a>
          <a href="javascript:;">
            <img src="@/assets/rabbitPic/uploads/new_goods_3.jpg" alt="" />
            <span class="name">广东软软糯米煲仔饭</span>
            <span class="price"><small>￥</small>129</span>
          </a>
          <a href="javascript:;">
            <img src="@/assets/rabbitPic/uploads/new_goods_4.jpg" alt="" />
            <span class="name">罗西机械智能手表</span>
            <span class="price"><small>￥</small>3399</span>
          </a>
        </div>
      </div>
    </div>
    <!-- 人气推荐 -->
    <div class="xtx_goods_popular xtx_panel">
      <div class="wrapper">
        <!-- 面板头部 -->
        <div class="xtx_panel_header">
          <h3>人气推荐<small>人气爆款 不容错过</small></h3>
        </div>
        <!-- 商品列表 -->
        <div class="xtx_panel_goods_1">
          <a href="javascript:;">
            <img src="@/assets/rabbitPic/uploads/popular_1.jpg" />
            <span class="title">特惠推荐</span>
            <span class="alt">我猜得到 你的需要</span>
          </a>
          <a href="javascript:;">
            <img src="@/assets/rabbitPic/uploads/popular_2.jpg" />
            <span class="title">爆款推荐</span>
            <span class="alt">人气好物推荐</span>
          </a>
          <a href="javascript:;">
            <img src="@/assets/rabbitPic/uploads/popular_3.jpg" />
            <span class="title">场景使用一站买全</span>
            <span class="alt">编辑精心整理推荐</span>
          </a>
          <a href="javascript:;">
            <img src="@/assets/rabbitPic/uploads/popular_4.jpg" />
            <span class="title">领券中心</span>
            <span class="alt">发现更多超值优惠券</span>
          </a>
        </div>
      </div>
    </div>
    <!-- 热门品牌 -->
    <div class="xtx_goods_brand xtx_panel">
      <div class="wrapper">
        <div class="xtx_panel_header">
          <h3>热门品牌<small>国际经典 品质保证</small></h3>
          <div class="page-bar">
            <a href="javascript:;" class="prev sprites"></a>
            <a href="javascript:;" class="next sprites active"></a>
          </div>
        </div>
        <!-- 商品列表 -->
        <div class="xtx_goods">
          <ul>
            <li>
              <div class="time">
                <h2>小兔倒计时</h2>
                <p class="clock">
                  {{ count }}
                </p>
              </div>

              <!-- <a href="javascript:;">
                1234456 -->
              <!-- <img
                  src="@/assets/rabbitPic/uploads/brand_goods_1.jpg"
                  alt=""
                /> -->
              <!-- </a> -->
              <a href="javascript:;">
                <img
                  src="@/assets/rabbitPic/uploads/brand_goods_2.jpg"
                  alt=""
                />
              </a>
              <a href="javascript:;">
                <img
                  src="@/assets/rabbitPic/uploads/brand_goods_3.jpg"
                  alt=""
                />
              </a>
              <a href="javascript:;">
                <img
                  src="@/assets/rabbitPic/uploads/brand_goods_4.jpg"
                  alt=""
                />
              </a>
              <a href="javascript:;">
                <img
                  src="@/assets/rabbitPic/uploads/brand_goods_5.jpg"
                  alt=""
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 分类商品 -->
    <div class="xtx_goods_category xtx_panel">
      <div class="wrapper">
        <!-- 生鲜 -->
        <div class="xtx_panel_header">
          <h3>生鲜</h3>
          <a href="javascript:;" class="more">
            查看全部<i class="sprites"></i>
          </a>
          <div class="tabs-bar">
            <a href="javascript:;" class="active">水果</a>
            <a href="javascript:;">蔬菜</a>
            <a href="javascript:;">肉禽蛋</a>
            <a href="javascript:;">裤装</a>
            <a href="javascript:;">衬衫</a>
            <a href="javascript:;">内衣</a>
          </div>
        </div>
        <!-- 商品列表 -->
        <div class="xtx_panel_goods_2">
          <ul class="clearfix">
            <li>
              <a href="javascript:;">
                <img
                  src="@/assets/rabbitPic/uploads/fresh_goods_cover.jpg"
                  alt=""
                  class="pic"
                />
              </a>
              <div class="label">
                <span>生鲜馆</span>
                <span>全场3件8折</span>
              </div>
            </li>
            <li>
              <!-- 商品图片 -->
              <a href="javascript:;">
                <div class="img-box">
                  <img
                    src="@/assets/rabbitPic/uploads/fresh_goods_1.jpg"
                    alt=""
                  />
                </div>
              </a>
              <!-- 商品信息 -->
              <div class="meta">
                <p class="name">美威 智利原味三文鱼排 240g/袋 4片装</p>
                <p class="flag">海鲜年货</p>
                <p class="price"><small>￥</small>59</p>
              </div>
              <!-- 其它 -->
              <div class="extra">
                <a href="javascript:;">
                  <span>找相似</span>
                  <span>发现现多宝贝&gt;</span>
                </a>
              </div>
            </li>
            <li>
              <a href="javascript:;">
                <div class="img-box">
                  <img
                    src="@/assets/rabbitPic/uploads/fresh_goods_2.jpg"
                    alt=""
                  />
                </div>
              </a>
              <div class="meta">
                <p class="name">红功夫 麻辣小龙虾1.5kg 4-6钱/25-32只</p>
                <p class="flag">火锅食材</p>
                <p class="price"><small>￥</small>71.9</p>
              </div>
              <!-- 其它 -->
              <div class="extra">
                <a href="javascript:;">
                  <span>找相似</span>
                  <span>发现现多宝贝&gt;</span>
                </a>
              </div>
            </li>
            <li>
              <a href="javascript:;">
                <div class="img-box">
                  <img
                    src="@/assets/rabbitPic/uploads/fresh_goods_3.jpg"
                    alt=""
                  />
                </div>
              </a>
              <div class="meta">
                <p class="name">三都港 冷冻无公害黄花鱼 700g 2条 袋装</p>
                <p class="flag">海鲜水产</p>
                <p class="price"><small>￥</small>49.9</p>
              </div>
              <!-- 其它 -->
              <div class="extra">
                <a href="javascript:;">
                  <span>找相似</span>
                  <span>发现现多宝贝&gt;</span>
                </a>
              </div>
            </li>
            <li>
              <a href="javascript:;">
                <div class="img-box">
                  <img
                    src="@/assets/rabbitPic/uploads/fresh_goods_4.jpg"
                    alt=""
                  />
                </div>
              </a>
              <div class="meta">
                <p class="name">
                  渔公码头 大连鲜食入味 即食海参 辽参刺参 调味海
                </p>
                <p class="flag">海鲜年货</p>
                <p class="price"><small>￥</small>899</p>
              </div>
              <!-- 其它 -->
              <div class="extra">
                <a href="javascript:;">
                  <span>找相似</span>
                  <span>发现现多宝贝&gt;</span>
                </a>
              </div>
            </li>
            <li>
              <a href="javascript:;">
                <div class="img-box">
                  <img
                    src="@/assets/rabbitPic/uploads/fresh_goods_5.jpg"
                    alt=""
                  />
                </div>
              </a>
              <div class="meta">
                <p class="name">越南进口白心火龙果4个 装 标准果 单果400-550g</p>
                <p class="flag"></p>
                <p class="price"><small>￥</small>29</p>
              </div>
              <!-- 其它 -->
              <div class="extra">
                <a href="javascript:;">
                  <span>找相似</span>
                  <span>发现现多宝贝&gt;</span>
                </a>
              </div>
            </li>
            <li>
              <a href="javascript:;">
                <div class="img-box">
                  <img
                    src="@/assets/rabbitPic/uploads/fresh_goods_6.jpg"
                    alt=""
                  />
                </div>
              </a>
              <div class="meta">
                <p class="name">广西沃柑 柑橘1.5kg</p>
                <p class="flag">新鲜水果</p>
                <p class="price"><small>￥</small>59</p>
              </div>
              <!-- 其它 -->
              <div class="extra">
                <a href="javascript:;">
                  <span>找相似</span>
                  <span>发现现多宝贝&gt;</span>
                </a>
              </div>
            </li>
            <li>
              <a href="javascript:;">
                <div class="img-box">
                  <img
                    src="@/assets/rabbitPic/uploads/fresh_goods_7.jpg"
                    alt=""
                  />
                </div>
              </a>
              <div class="meta">
                <p class="name">进口 牛油果 6个装 单果重约130-180g</p>
                <p class="flag">新鲜水果</p>
                <p class="price"><small>￥</small>39.9</p>
              </div>
              <!-- 其它 -->
              <div class="extra">
                <a href="javascript:;">
                  <span>找相似</span>
                  <span>发现现多宝贝&gt;</span>
                </a>
              </div>
            </li>
            <li>
              <a href="javascript:;">
                <div class="img-box">
                  <img
                    src="@/assets/rabbitPic/uploads/fresh_goods_8.jpg"
                    alt=""
                  />
                </div>
              </a>
              <div class="meta">
                <p class="name">泰国进口山竹5A级 500g</p>
                <p class="flag">新鲜水果</p>
                <p class="price"><small>￥</small>29.9</p>
              </div>
              <!-- 其它 -->
              <div class="extra">
                <a href="javascript:;">
                  <span>找相似</span>
                  <span>发现现多宝贝&gt;</span>
                </a>
              </div>
            </li>
          </ul>
        </div>

        <!-- 服饰 -->
        <div class="xtx_panel_header">
          <h3>服饰</h3>
          <a href="javascript:;" class="more">
            查看全部<i class="sprites"></i>
          </a>
          <div class="tabs-bar">
            <a href="javascript:;" class="active">行李箱</a>
            <a href="javascript:;">男士包袋</a>
            <a href="javascript:;">女士包袋</a>
            <a href="javascript:;">钱包及小提袋</a>
            <a href="javascript:;">男鞋</a>
            <a href="javascript:;">女鞋</a>
            <a href="javascript:;">拖鞋</a>
          </div>
        </div>
        <!-- 商品列表 -->
        <div class="xtx_panel_goods_2">
          <ul class="clearfix">
            <li>
              <a href="javascript:;">
                <img
                  src="@/assets/rabbitPic/uploads/clothes_goods_cover.jpg"
                  alt=""
                  class="pic"
                />
              </a>
              <div class="label">
                <span>服饰馆</span>
                <span>3折狂欢</span>
              </div>
            </li>
            <li>
              <!-- 商品图片 -->
              <a href="javascript:;">
                <div class="img-box">
                  <img
                    src="@/assets/rabbitPic/uploads/clothes_goods_1.jpg"
                    alt=""
                  />
                </div>
              </a>
              <!-- 商品信息 -->
              <div class="meta">
                <p class="name">人本秋季厚底帆布鞋 韩版低帮增高学生</p>
                <p class="flag"></p>
                <p class="price"><small>￥</small>55</p>
              </div>
              <!-- 其它 -->
              <div class="extra">
                <a href="javascript:;">
                  <span>找相似</span>
                  <span>发现现多宝贝&gt;</span>
                </a>
              </div>
            </li>
            <li>
              <a href="javascript:;">
                <div class="img-box">
                  <img
                    src="@/assets/rabbitPic/uploads/clothes_goods_2.jpg"
                    alt=""
                  />
                </div>
              </a>
              <div class="meta">
                <p class="name">
                  迪士尼真皮针扣表带宽度 14-16mm规格双色压纹 女表带
                </p>
                <p class="flag">海鲜年货</p>
                <p class="price"><small>￥</small>20.9</p>
              </div>
              <!-- 其它 -->
              <div class="extra">
                <a href="javascript:;">
                  <span>找相似</span>
                  <span>发现现多宝贝&gt;</span>
                </a>
              </div>
            </li>
            <li>
              <a href="javascript:;">
                <div class="img-box">
                  <img
                    src="@/assets/rabbitPic/uploads/clothes_goods_3.jpg"
                    alt=""
                  />
                </div>
              </a>
              <div class="meta">
                <p class="name">三都港 冷冻无公害黄花鱼 700g 2条 袋装</p>
                <p class="flag">海鲜水产</p>
                <p class="price"><small>￥</small>209</p>
              </div>
              <!-- 其它 -->
              <div class="extra">
                <a href="javascript:;">
                  <span>找相似</span>
                  <span>发现现多宝贝&gt;</span>
                </a>
              </div>
            </li>
            <li>
              <a href="javascript:;">
                <div class="img-box">
                  <img
                    src="@/assets/rabbitPic/uploads/clothes_goods_4.jpg"
                    alt=""
                  />
                </div>
              </a>
              <div class="meta">
                <p class="name">ONLY夏季新款高腰宽松 七分阔腿裙裤休闲裤</p>
                <p class="flag"></p>
                <p class="price"><small>￥</small>274.5</p>
              </div>
              <!-- 其它 -->
              <div class="extra">
                <a href="javascript:;">
                  <span>找相似</span>
                  <span>发现现多宝贝&gt;</span>
                </a>
              </div>
            </li>
            <li>
              <a href="javascript:;">
                <div class="img-box">
                  <img
                    src="@/assets/rabbitPic/uploads/clothes_goods_5.jpg"
                    alt=""
                  />
                </div>
              </a>
              <div class="meta">
                <p class="name">拉夫劳伦t恤男正品</p>
                <p class="flag">圆领短袖</p>
                <p class="price"><small>￥</small>99</p>
              </div>
              <!-- 其它 -->
              <div class="extra">
                <a href="javascript:;">
                  <span>找相似</span>
                  <span>发现现多宝贝&gt;</span>
                </a>
              </div>
            </li>
            <li>
              <a href="javascript:;">
                <div class="img-box">
                  <img
                    src="@/assets/rabbitPic/uploads/clothes_goods_6.jpg"
                    alt=""
                  />
                </div>
              </a>
              <div class="meta">
                <p class="name">李宁跑步鞋男鞋空气 弧2018春季款</p>
                <p class="flag"></p>
                <p class="price"><small>￥</small>79</p>
              </div>
              <!-- 其它 -->
              <div class="extra">
                <a href="javascript:;">
                  <span>找相似</span>
                  <span>发现现多宝贝&gt;</span>
                </a>
              </div>
            </li>
            <li>
              <a href="javascript:;">
                <div class="img-box">
                  <img
                    src="@/assets/rabbitPic/uploads/clothes_goods_7.jpg"
                    alt=""
                  />
                </div>
              </a>
              <div class="meta">
                <p class="name">Dickies男鞋2020春季 英伦休闲工装鞋低帮</p>
                <p class="flag"></p>
                <p class="price"><small>￥</small>179</p>
              </div>
              <!-- 其它 -->
              <div class="extra">
                <a href="javascript:;">
                  <span>找相似</span>
                  <span>发现现多宝贝&gt;</span>
                </a>
              </div>
            </li>
            <li>
              <a href="javascript:;">
                <div class="img-box">
                  <img
                    src="@/assets/rabbitPic/uploads/clothes_goods_8.jpg"
                    alt=""
                  />
                </div>
              </a>
              <div class="meta">
                <p class="name">北极绒春夏季纯棉背心 男士修身纯色打底</p>
                <p class="flag"></p>
                <p class="price"><small>￥</small>69</p>
              </div>
              <!-- 其它 -->
              <div class="extra">
                <a href="javascript:;">
                  <span>找相似</span>
                  <span>发现现多宝贝&gt;</span>
                </a>
              </div>
            </li>
          </ul>
        </div>

        <!-- 餐厨 -->
        <div class="xtx_panel_header">
          <h3>餐厨</h3>
          <a href="javascript:;" class="more">
            查看全部<i class="sprites"></i>
          </a>
          <div class="tabs-bar">
            <a href="javascript:;" class="active">水果</a>
            <a href="javascript:;">蔬菜</a>
            <a href="javascript:;">肉禽蛋</a>
            <a href="javascript:;">裤装</a>
            <a href="javascript:;">衬衫</a>
            <a href="javascript:;">内衣</a>
          </div>
        </div>
        <!-- 商品列表 -->
        <div class="xtx_panel_goods_2">
          <ul class="clearfix">
            <li>
              <a href="javascript:;">
                <img
                  src="@/assets/rabbitPic/uploads/kitchen_goods_cover.jpg"
                  alt=""
                  class="pic"
                />
              </a>
              <div class="label">
                <span>餐厨馆</span>
                <span>大额优惠</span>
              </div>
            </li>
            <li>
              <!-- 商品图片 -->
              <a href="javascript:;">
                <div class="img-box">
                  <img
                    src="@/assets/rabbitPic/uploads/kitchen_goods_1.jpg"
                    alt=""
                  />
                </div>
              </a>
              <!-- 商品信息 -->
              <div class="meta">
                <p class="name">创意可爱不锈钢便携餐具 套装筷子便携三件套</p>
                <p class="flag"></p>
                <p class="price"><small>￥</small>5.9</p>
              </div>
              <!-- 其它 -->
              <div class="extra">
                <a href="javascript:;">
                  <span>找相似</span>
                  <span>发现现多宝贝&gt;</span>
                </a>
              </div>
            </li>
            <li>
              <a href="javascript:;">
                <div class="img-box">
                  <img
                    src="@/assets/rabbitPic/uploads/kitchen_goods_2.jpg"
                    alt=""
                  />
                </div>
              </a>
              <div class="meta">
                <p class="name">三金西瓜霜竹炭牙刷软毛 成人家用家庭装</p>
                <p class="flag"></p>
                <p class="price"><small>￥</small>20.9</p>
              </div>
              <!-- 其它 -->
              <div class="extra">
                <a href="javascript:;">
                  <span>找相似</span>
                  <span>发现现多宝贝&gt;</span>
                </a>
              </div>
            </li>
            <li>
              <a href="javascript:;">
                <div class="img-box">
                  <img
                    src="@/assets/rabbitPic/uploads/kitchen_goods_3.jpg"
                    alt=""
                  />
                </div>
              </a>
              <div class="meta">
                <p class="name">
                  朴（TOPOTO）大卫免手 洗平板拖把拓扑懒人木地 板刮刮乐桶拖布
                </p>
                <p class="flag"></p>
                <p class="price"><small>￥</small>129</p>
              </div>
              <!-- 其它 -->
              <div class="extra">
                <a href="javascript:;">
                  <span>找相似</span>
                  <span>发现现多宝贝&gt;</span>
                </a>
              </div>
            </li>
            <li>
              <a href="javascript:;">
                <div class="img-box">
                  <img
                    src="@/assets/rabbitPic/uploads/kitchen_goods_4.jpg"
                    alt=""
                  />
                </div>
              </a>
              <div class="meta">
                <p class="name">ONLY夏季新款高腰宽松 七分阔腿裙裤休闲裤</p>
                <p class="flag"></p>
                <p class="price"><small>￥</small>274.5</p>
              </div>
              <!-- 其它 -->
              <div class="extra">
                <a href="javascript:;">
                  <span>找相似</span>
                  <span>发现现多宝贝&gt;</span>
                </a>
              </div>
            </li>
            <li>
              <a href="javascript:;">
                <div class="img-box">
                  <img
                    src="@/assets/rabbitPic/uploads/kitchen_goods_5.jpg"
                    alt=""
                  />
                </div>
              </a>
              <div class="meta">
                <p class="name">金纺不伤手柔顺剂 妈妈的选择</p>
                <p class="flag"></p>
                <p class="price"><small>￥</small>29</p>
              </div>
              <!-- 其它 -->
              <div class="extra">
                <a href="javascript:;">
                  <span>找相似</span>
                  <span>发现现多宝贝&gt;</span>
                </a>
              </div>
            </li>
            <li>
              <a href="javascript:;">
                <div class="img-box">
                  <img
                    src="@/assets/rabbitPic/uploads/kitchen_goods_6.jpg"
                    alt=""
                  />
                </div>
              </a>
              <div class="meta">
                <p class="name">洁成绵柔抹布洗碗巾超 值5片装 洗锅刷碗</p>
                <p class="flag"></p>
                <p class="price"><small>￥</small>10.9</p>
              </div>
              <!-- 其它 -->
              <div class="extra">
                <a href="javascript:;">
                  <span>找相似</span>
                  <span>发现现多宝贝&gt;</span>
                </a>
              </div>
            </li>
            <li>
              <a href="javascript:;">
                <div class="img-box">
                  <img
                    src="@/assets/rabbitPic/uploads/kitchen_goods_7.jpg"
                    alt=""
                  />
                </div>
              </a>
              <div class="meta">
                <p class="name">大卫双驱动旋转拖把桶 免手洗拓扑拖布地拖墩布</p>
                <p class="flag"></p>
                <p class="price"><small>￥</small>159</p>
              </div>
              <!-- 其它 -->
              <div class="extra">
                <a href="javascript:;">
                  <span>找相似</span>
                  <span>发现现多宝贝&gt;</span>
                </a>
              </div>
            </li>
            <li>
              <a href="javascript:;">
                <div class="img-box">
                  <img
                    src="@/assets/rabbitPic/uploads/kitchen_goods_8.jpg"
                    alt=""
                  />
                </div>
              </a>
              <div class="meta">
                <p class="name">斧头牌（AXE）去污地板 清洁剂2L 柠檬清香</p>
                <p class="flag">海鲜年货</p>
                <p class="price"><small>￥</small>22.9</p>
              </div>
              <!-- 其它 -->
              <div class="extra">
                <a href="javascript:;">
                  <span>找相似</span>
                  <span>发现现多宝贝&gt;</span>
                </a>
              </div>
            </li>
          </ul>
        </div>

        <!-- 居家 -->
        <div class="xtx_panel_header">
          <h3>居家</h3>
          <a href="javascript:;" class="more">
            查看全部<i class="sprites"></i>
          </a>
          <div class="tabs-bar">
            <a href="javascript:;" class="active">咖啡具</a>
            <a href="javascript:;">水具酒具</a>
            <a href="javascript:;">锅具</a>
            <a href="javascript:;">餐具</a>
            <a href="javascript:;">功能厨具</a>
            <a href="javascript:;">茶具</a>
            <a href="javascript:;">清洁保鲜</a>
          </div>
        </div>
        <!-- 商品列表 -->
        <div class="xtx_panel_goods_2">
          <ul class="clearfix">
            <li>
              <a href="javascript:;">
                <img
                  src="@/assets/rabbitPic/uploads/home_goods_cover.jpg"
                  alt=""
                  class="pic"
                />
              </a>
              <div class="label">
                <span>居家馆</span>
                <span>全场满减</span>
              </div>
            </li>
            <li>
              <!-- 商品图片 -->
              <a href="javascript:;">
                <div class="img-box">
                  <img
                    src="@/assets/rabbitPic/uploads/home_goods_1.jpg"
                    alt=""
                  />
                </div>
              </a>
              <!-- 商品信息 -->
              <div class="meta">
                <p class="name">菜鸟异常专用链接 非请 勿拍</p>
                <p class="flag">海鲜年货</p>
                <p class="price"><small>￥</small>8999</p>
              </div>
              <!-- 其它 -->
              <div class="extra">
                <a href="javascript:;">
                  <span>找相似</span>
                  <span>发现现多宝贝&gt;</span>
                </a>
              </div>
            </li>
            <li>
              <a href="javascript:;">
                <div class="img-box">
                  <img
                    src="@/assets/rabbitPic/uploads/home_goods_2.jpg"
                    alt=""
                  />
                </div>
              </a>
              <div class="meta">
                <p class="name">【中盐软水盐】汉斯希 尔家用软水机适配</p>
                <p class="flag"></p>
                <p class="price"><small>￥</small>65</p>
              </div>
              <!-- 其它 -->
              <div class="extra">
                <a href="javascript:;">
                  <span>找相似</span>
                  <span>发现现多宝贝&gt;</span>
                </a>
              </div>
            </li>
            <li>
              <a href="javascript:;">
                <div class="img-box">
                  <img
                    src="@/assets/rabbitPic/uploads/home_goods_3.jpg"
                    alt=""
                  />
                </div>
              </a>
              <div class="meta">
                <p class="name">云米净水壶家用直饮台式 净水机渗透过滤自来水</p>
                <p class="flag">海鲜年货</p>
                <p class="price"><small>￥</small>129</p>
              </div>
              <!-- 其它 -->
              <div class="extra">
                <a href="javascript:;">
                  <span>找相似</span>
                  <span>发现现多宝贝&gt;</span>
                </a>
              </div>
            </li>
            <li>
              <a href="javascript:;">
                <div class="img-box">
                  <img
                    src="@/assets/rabbitPic/uploads/home_goods_4.jpg"
                    alt=""
                  />
                </div>
              </a>
              <div class="meta">
                <p class="name">ztk恒温调奶器配件玻璃壶 炖盅</p>
                <p class="flag">海鲜年货</p>
                <p class="price"><small>￥</small>129</p>
              </div>
              <!-- 其它 -->
              <div class="extra">
                <a href="javascript:;">
                  <span>找相似</span>
                  <span>发现现多宝贝&gt;</span>
                </a>
              </div>
            </li>
            <li>
              <a href="javascript:;">
                <div class="img-box">
                  <img
                    src="@/assets/rabbitPic/uploads/home_goods_5.jpg"
                    alt=""
                  />
                </div>
              </a>
              <div class="meta">
                <p class="name">荞麦枕头单人枕芯双人 护颈椎枕头芯</p>
                <p class="flag"></p>
                <p class="price"><small>￥</small>29</p>
              </div>
              <!-- 其它 -->
              <div class="extra">
                <a href="javascript:;">
                  <span>找相似</span>
                  <span>发现现多宝贝&gt;</span>
                </a>
              </div>
            </li>
            <li>
              <a href="javascript:;">
                <div class="img-box">
                  <img
                    src="@/assets/rabbitPic/uploads/home_goods_6.jpg"
                    alt=""
                  />
                </div>
              </a>
              <div class="meta">
                <p class="name">Bear/小熊 LLJ-B04G1 家用多功能切碎机 电动</p>
                <p class="flag">料理机</p>
                <p class="price"><small>￥</small>10.9</p>
              </div>
              <!-- 其它 -->
              <div class="extra">
                <a href="javascript:;">
                  <span>找相似</span>
                  <span>发现现多宝贝&gt;</span>
                </a>
              </div>
            </li>
            <li>
              <a href="javascript:;">
                <div class="img-box">
                  <img
                    src="@/assets/rabbitPic/uploads/home_goods_7.jpg"
                    alt=""
                  />
                </div>
              </a>
              <div class="meta">
                <p class="name">荣事达薄饼机春饼春卷皮 家用博饼机电饼铛</p>
                <p class="flag"></p>
                <p class="price"><small>￥</small>159</p>
              </div>
              <!-- 其它 -->
              <div class="extra">
                <a href="javascript:;">
                  <span>找相似</span>
                  <span>发现现多宝贝&gt;</span>
                </a>
              </div>
            </li>
            <li>
              <a href="javascript:;">
                <div class="img-box">
                  <img
                    src="@/assets/rabbitPic/uploads/home_goods_8.jpg"
                    alt=""
                  />
                </div>
              </a>
              <div class="meta">
                <p class="name">美式双人实木床 红实木 显档次</p>
                <p class="flag"></p>
                <p class="price"><small>￥</small>22.9</p>
              </div>
              <!-- 其它 -->
              <div class="extra">
                <a href="javascript:;">
                  <span>找相似</span>
                  <span>发现现多宝贝&gt;</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyGoods',
  data() {
    return {
      count: '',
      h: 0,
      m: 0,
      s: 0,
      seconds: 3801
    }
  },
  mounted() {
    this.Time()
  },
  methods: {
    Time() {
      setInterval(() => {
        this.seconds -= 1
        const h = parseInt((this.seconds / 60 / 60) % 24)
        const m = parseInt((this.seconds / 60) % 60)
        const s = parseInt(this.seconds % 60)
        if (this.seconds === -1) {
          this.seconds = 3601
          clearInterval(this.timer)
        }
        this.h = h < 10 ? '0' + h : h
        this.m = m < 10 ? '0' + m : m
        this.s = s < 10 ? '0' + s : s
        this.count = this.h + ': ' + this.m + ':' + this.s
      }, 1000)
    }
  }
}
</script>

<style lang="less" scoped>
pre {
  font-family: monospace, monospace;
  /* 1 */
  font-size: 1em;
  /* 2 */
}
small {
  margin-right: 4px;
  font-size: 80%;
}
a {
  text-decoration: none;
  color: #333;
}

i {
  font-style: normal;
}
img {
  border-style: none;
}
.sprites {
  background-image: url(@/assets/sprites.png);
  background-size: 400px 400px;
  background-repeat: no-repeat;
}
/* 新鲜好物 */
.wrapper {
  width: 1240px;
  margin: 0 auto;
}
.xtx_panel .xtx_panel_header {
  height: 115px;
  padding: 40px 0;
}

.xtx_panel .xtx_panel_header h3 {
  height: 35px;
  line-height: 35px;
  margin-left: 6px;
  font-size: 32px;
  font-weight: 400;
  color: #333;
  float: left;
}

.xtx_panel .xtx_panel_header small {
  margin-left: 22px;
  font-size: 16px;
  color: #999;
}

.xtx_panel .xtx_panel_header .more {
  line-height: 1;
  margin-top: 14px;
  font-size: 16px;
  color: #999;
  float: right;
}

.xtx_panel .xtx_panel_header .more i {
  display: inline-block;
  width: 16px;
  height: 16px;
  position: relative;
  top: 1px;
  background-position: 8px -106px;
}

.xtx_panel .xtx_panel_header .tabs-bar {
  height: 35px;
  padding-top: 13px;
  font-size: 16px;
  margin-right: 80px;
  float: right;
}

.xtx_panel .xtx_panel_header .tabs-bar a {
  padding: 2px 8px;
  margin-left: 5px;
  border-radius: 2px;
}

.xtx_panel .xtx_panel_header .tabs-bar a:hover,
.xtx_panel .xtx_panel_header .tabs-bar a.active {
  background-color: #27ba9b;
  color: #fff;
}

.xtx_panel .xtx_panel_goods_1 {
  text-align: justify;
  font-size: 0;
}

.xtx_panel .xtx_panel_goods_1:after {
  content: '';
  display: inline-block;
  width: 306px;
  height: 0;
}

.xtx_panel .xtx_panel_goods_1 a {
  display: inline-block;
  width: 306px;
  height: 406px;
  text-align: center;
}

.xtx_panel .xtx_panel_goods_1 img {
  width: 306px;
  height: 306px;
}
.xtx_panel .xtx_panel_goods_2 {
  height: 610px;
}

.xtx_panel .xtx_panel_goods_2 li {
  width: 240px;
  height: 300px;
  padding-top: 10px;
  margin-left: 10px;
  background-color: #fff;
  border: 1px solid #fff;
  overflow: hidden;
  transition: 0.3s;
  position: relative;
  float: left;
}

.xtx_panel .xtx_panel_goods_2 li:hover {
  border-color: #27ba9b;
}

.xtx_panel .xtx_panel_goods_2 li:hover .extra {
  bottom: 0;
}

.xtx_panel .xtx_panel_goods_2 li:first-child {
  height: 610px;
  padding-top: 0;
  margin-left: 0;
  border: 0;
}

.xtx_panel .xtx_panel_goods_2 li:nth-last-child(-n + 4) {
  margin-top: 10px;
}

.xtx_panel .xtx_panel_goods_2 a {
  display: block;
}

.xtx_panel .xtx_panel_goods_2 .img-box {
  width: 240px;
  height: 160px;
  padding: 0 33px;
  text-align: center;
  margin: 0 auto;
  display: table-cell;
  vertical-align: middle;
}

.xtx_panel .xtx_panel_goods_2 .meta {
  height: 130px;
  line-height: 1.3;
  padding: 10px 22px 0;
  font-size: 19px;
  position: relative;
}

.xtx_panel .xtx_panel_goods_2 .name {
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.xtx_panel .xtx_panel_goods_2 .price {
  font-size: 22px;
  color: #cf4444;
  position: absolute;
  bottom: 10px;
}

.xtx_panel .xtx_panel_goods_2 .price small {
  font-size: 17px;
}

.xtx_panel .xtx_panel_goods_2 .extra {
  width: 100%;
  height: 86px;
  padding-top: 10px;
  transition: bottom 0.3s;
  background-color: #27ba9b;
  position: absolute;
  bottom: -86px;
}

.xtx_panel .xtx_panel_goods_2 .extra span {
  display: block;
  width: 124px;
  line-height: 1;
  padding: 9px 0 8px;
  margin: 0 auto;
  text-align: center;
  font-size: 19px;
  color: #fff;
}

.xtx_panel .xtx_panel_goods_2 .extra span:last-child {
  font-size: 13px;
  border-top: 1px solid #fff;
}

.xtx_panel .xtx_panel_goods_2 .label {
  position: absolute;
  left: 0;
  bottom: 266px;
  width: 188px;
  height: 66px;
  text-align: center;
  line-height: 66px;
  color: #fff;
  font-size: 17px;
  border-radius: 0 2px 2px 0;
  background-color: rgba(0, 0, 0, 0.8);
  position: relative;
}

.xtx_panel .xtx_panel_goods_2 .label span:first-child {
  display: block;
  width: 76px;
  background-color: #000;
}

.xtx_panel .xtx_panel_goods_2 .label span:last-child {
  width: 112px;
  line-height: 1.4;
  transform: translate(0, -50%);
  position: absolute;
  left: 76px;
  right: 0;
  top: 50%;
}
/** 新鲜好物 **/
.xtx_goods_new .xtx_panel_goods_1 a {
  margin-right: 3px;
  background-color: #f0f9f4;
  transition: 0.5s;
  position: relative;
  top: 0;
}
.xtx_goods_new .xtx_panel_goods_1 .more1 {
  margin-right: 3px;
  background-color: red;
  transition: 0.5s;
  position: relative;
  top: 0;
}
.xtx_goods_new .xtx_panel_goods_1 a:hover {
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  top: -3px;
}

.xtx_goods_new .xtx_panel_goods_1 .name {
  display: inline-block;
  width: 100%;
  margin: 12px 0 10px;
  font-size: 22px;
}

.xtx_goods_new .xtx_panel_goods_1 .price {
  font-size: 23px;
  color: #cf4444;
}

.xtx_goods_new .xtx_panel_goods_1 small {
  font-size: 16px;
}

/** 人气推荐 **/
.xtx_goods_popular {
  padding-bottom: 42px;
}

.xtx_goods_popular .xtx_panel_goods_1 a {
  transition: 0.5s;
}

.xtx_goods_popular .xtx_panel_goods_1 a:hover {
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  transform: translate(0, -3px);
}

.xtx_goods_popular .xtx_panel_goods_1 .title {
  display: inline-block;
  width: 100%;
  line-height: 1;
  margin: 20px 0 16px;
  font-size: 22px;
}

.xtx_goods_popular .xtx_panel_goods_1 .alt {
  font-size: 18px;
  color: #999;
}
/** 人气推荐 **/
.xtx_goods_popular {
  padding-bottom: 42px;
}

.xtx_goods_popular .xtx_panel_goods_1 a {
  transition: 0.5s;
}

.xtx_goods_popular .xtx_panel_goods_1 a:hover {
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  transform: translate(0, -3px);
}

.xtx_goods_popular .xtx_panel_goods_1 .title {
  display: inline-block;
  width: 100%;
  line-height: 1;
  margin: 20px 0 16px;
  font-size: 22px;
}

.xtx_goods_popular .xtx_panel_goods_1 .alt {
  font-size: 18px;
  color: #999;
}

/** 热门品牌 **/
.xtx_goods_brand {
  padding-bottom: 32px;
  background-color: #f5f5f5;
}

.xtx_goods_brand .page-bar {
  float: right;
}

.xtx_goods_brand .page-bar a {
  display: inline-block;
  width: 20px;
  height: 20px;
  line-height: 1;
  margin-top: 10px;
  background-color: #e2e2e2;
}

.xtx_goods_brand .page-bar a:hover,
.xtx_goods_brand .page-bar a.active {
  background-color: #27ba9b;
}

.xtx_goods_brand .page-bar .prev {
  margin-right: 5px;
  background-position: -32px -106px;
  transform: rotate(180deg);
}

.xtx_goods_brand .page-bar .next {
  background-position: -32px -106px;
}

.xtx_goods_brand .xtx_goods {
  height: 305px;
}

.xtx_goods_brand .xtx_goods li {
  display: flex;
}

.xtx_goods_brand .xtx_goods a {
  margin-right: 10px;
  background-color: red;
}

.xtx_goods_brand .xtx_goods a img {
  width: 240px;
  height: 305px;
}
.xtx_goods_brand .xtx_goods .time {
  margin-right: 10px;
  width: 240px;
  height: 305px;
  text-align: center;
  background: url(@/assets/rabbitPic/images/seckill.jpg) no-repeat;
  background-size: contain;
  font-size: 20px;
  padding-top: 32px;
}
.xtx_goods_brand .xtx_goods .time h2 {
  color: #fff;
}
.xtx_goods_brand .xtx_goods .time p {
  margin-top: 140px;
  font-size: 25px;
  color: #fff;
}
.xtx_goods_brand .xtx_goods .time span {
  background-color: #000;
  display: inline-block;
  border-radius: 10px;
  width: 50px;
}
.xtx_goods_brand .xtx_goods .time i {
  padding: 0 5px 0 5px;
}
.xtx_goods_brand .xtx_goods a:last-child {
  margin-right: 0;
}
/** 生鲜 **/
.xtx_goods_category {
  padding-bottom: 80px;
}
img {
  width: 149px;
}
.xtx_goods_category .xtx_panel_goods_2 .pic {
  width: 240px;
}
</style>
