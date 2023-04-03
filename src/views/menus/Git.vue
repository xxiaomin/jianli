<template>
  <div class="git-container">
    <div class="dawai">
      <div class="shang">
        <table>
          <thead>
            <tr>
              <th colspan="5">项目分支的合并与提交</th>
            </tr>
          </thead>
          <tbody v-for="(item, index) in dataList" :key="index">
            <tr>
              <td>{{ item.zonga }}</td>
              <td>{{ item.zongb }}</td>
              <td>{{ item.zongc }}</td>
              <td>{{ item.zongd }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th colspan="2">Git:&nbsp;开源的分布式版本控制系统</th>
              <th colspan="2">GitHub:&nbsp;开源项目托管平台</th>
            </tr>
          </tfoot>
        </table>
      </div>
      <div class="xia">
        <div class="sanjiao">^</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyGit',
  data() {
    return {
      dataList: [
        {
          zonga: 'git init (转化)',
          zongb: 'git add 名称(跟踪)',
          zongc: 'git commit - m "描述"(提交)',
          zongd: 'git status -s(文件状态)'
        },
        {
          zonga: 'ssh key(Github配置与访问)',
          zongb: '通过SSH将本地仓库上传到 Github',
          zongc: 'git remote show 名称(查看远程分支)',
          zongd: 'git pull (拉取)'
        },
        {
          zonga: 'git branch(分支状态)*表示位置',
          zongb: 'git checkout -b 名称（创建并切换）',
          zongc: 'git branch -d(删除) ',
          zongd: 'git merge 名称 (合并)'
        },
        {
          zonga: '？？红(未跟)',
          zongb: 'A绿(已跟)',
          zongc: ' M红(已修未存)',
          zongd: 'M绿(已修且存且跟)'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.git-container {
  // background-color: green;
  width: 100%;
  height: 100%;
  .dawai {
    display: flex;
    flex-direction: column;
    // background-color: purple;
    width: 100%;
    height: 100%;
    .shang {
      display: flex;
      flex: 4.5;
      width: 100%;
      flex-direction: column;
      // background-color: pink;
      // border-bottom: 3px solid #000;
      table {
        margin-top: 0.15rem;
        width: 100%;
        height: 100%;
        border-collapse: collapse;
        // border: 1px solid #000;
        td,
        th {
          text-align: center;
          border-top: 0.023rem solid #000;
        }
      }
      table:hover {
        background-color: gainsboro;
        // color: aliceblue;
        border-bottom: 1px solid #000;
      }
    }
    .xia {
      display: flex;

      flex: 1;
      width: 100%;
      .sanjiao {
        // margin-left: 20px;
        // background-color: pink;
        width: 0.8rem;
        height: 100%;
        animation: sanjiao 5s 0.5s infinite alternate;
        transition: all 2s;
      }
      .sanjiao:hover {
        cursor: pointer;
        animation-play-state: paused;
      }
    }
  }
}

@keyframes sanjiao {
  to {
    box-shadow: 0px 0.1rem 0.3rem gray;
    transform: translate(5.8rem) rotate(360deg);
    border-right: 0.1rem solid transparent;
    border-left: 0.1rem solid transparent;
    border-bottom: 0.1rem solid #fff;
  }
}
</style>
