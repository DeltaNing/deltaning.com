let randomTags = new Vue({
   el: '#randomTags',
   data: {
       tags: [
           'sabre', 'awe', 'adw', 'weg', 'abandon', 'bundle', 'city', 'dead', 'fight', 'eggs', 'ground', 'height', 'insight', 'jungle', 'knowledge', 'link', 'monster', 'nothing', 'open', 'penguin', 'queue', 'right', 'snow', 'tiny', 'ugly', 'victory', 'willing', 'x', 'yelling', 'zinc'
       ]
   },
    computed: {
        getTags() {
            return this.tags
        },
        tagColor() {
            return function () {
                let r = Math.random() * 255 + 50,
                    g = Math.random() * 255 + 50,
                    b = Math.random() * 255 + 50;
                return `rgb(${r}, ${g}, ${b})`
            }
        },
        tagSize() {
            return function () {
                return Math.random() * 20 + 12 + 'px';
            }
        }
    },
    created() {
        // todo: 获取标签列表
    }
});


let newHot = new Vue({
   el: '#newHot',
   data: {
        list: [
            {title: '使用码云git的webhook实现生产环境代', link: 'https:www.deltaning.com'},
            {title: '使用码云git的webhook实现生产环境代', link: 'https:www.deltaning.com'},
            {title: '使用码云git的webhook实现生产环境代', link: 'https:www.deltaning.com'},
            {title: '使用码云git的webhook实现生产环境代', link: 'https:www.deltaning.com'},
            {title: '使用码云git的webhook实现生产环境代', link: 'https:www.deltaning.com'},
            {title: '使用码云git的webhook实现生产环境代', link: 'https:www.deltaning.com'},
            {title: '使用码云git的webhook实现生产环境代', link: 'https:www.deltaning.com'},
            {title: '使用码云git的webhook实现生产环境代', link: 'https:www.deltaning.com'},
            {title: '使用码云git的webhook实现生产环境代', link: 'https:www.deltaning.com'},
            {title: '使用码云git的webhook实现生产环境代', link: 'https:www.deltaning.com'},
        ]
   },
    computed: {
        getNewHotList() {
            return this.list
        }
    },
    created() {
        // todo: 获取article列表
    }
});

let newComments = new Vue({
   el: '#newComments',
   data: {
       list: [
           {
               guestName: '入驻邀请',
               title: '使用码云git的webhook实现生产环境代',
               date: '1周前',
               link: 'https:www.deltaning.com'
           },{
               guestName: '入驻邀请',
               title: '使用码云git的webhook实现生产环境代',
               date: '1周前',
               link: 'https:www.deltaning.com'
           },{
               guestName: '入驻邀请',
               title: '使用码云git的webhook实现生产环境代',
               date: '1周前',
               link: 'https:www.deltaning.com'
           },{
               guestName: '入驻邀请',
               title: '使用码云git的webhook实现生产环境代',
               date: '1周前',
               link: 'https:www.deltaning.com'
           }
       ]
   },
    computed: {
       getNewCommentsList: function () {
           return this.list
       }
    }
});