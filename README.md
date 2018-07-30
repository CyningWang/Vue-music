# vue-music

> 音乐播放器 项目学习流程

## (1) 上传项目到github

``` bash
# 1. 初始化本地工作区
git init

# 2. 添加要上传内容
git add .  /* 初始全部添加 */

# 3. 提交到本地仓库
git commit -m "initial commit"

# 4. 关联远程仓库
git remote add origin 远程仓库地址

# 5. 更新到远程仓库
git push -u origin master
```

## (2) slider组件实现
> slider组件基于第三方better-scroll开发，相比于better-scroll 0.x.x版本，1.x.x版本有一些变动。

### 0.x.x版本和1.x.x版本在实现slider组件自动轮播的不同
#### -version 0.x.x
1. getCurrentPage().pageX 获取slider无缝轮播的前后辅助项
2. goToPage() 动画滚动到辅助项

#### -version 1.x.x
1. getCurrentPage().pageX 只能获取实际的页面，无法获取better-scroll添加的一前一后两个辅助页面
2. next() 滚动到下一个页面，可以滚动到辅助页面，然后瞬间切换到首页，实现自动无缝轮播