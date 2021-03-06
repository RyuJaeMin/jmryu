Session.set('curPageNum', 1);
Session.set('search', null);
Router.route('/study', 'study');


Template.study.onCreated(function() {
    //1
    console.log('created');
    //var obj = {};
    //
    //for(var i = 0; i < 50; i++) {
    //  obj.제목 = i;
    //  obj.작성자 = Meteor.user();
    //  obj.글번호 = i;
    //  obj.본문 = i;
    //  Boards.insert(obj);
    //}

});

Template.study.onRendered(function() {
    //3
    console.log('rendered');
    //$('.table > tbody > tr').click(function() {
    //  // row was clicked
    //  Router.go('/boardDetail', {_id: });
    //});
});

Template.study.helpers({

    //2
    study: function () {
        // total = 전체 갯수 파악
        // curCount = 현재 페이지에 보여줄 갯수 = 10
        // curPageNum = 현재 페이지 넘버 = 1~페이지 수만큼
        var total = study.find({}).fetch().length;
        var curCount = 10;

        var condition = Session.get('search')
        if (condition == null) {
            condition = {};
        }
        else {
            condition = {제목: {$regex: condition}}
        }
        return study.find(condition, {
            limit: curCount,
            skip: (curCount*Session.get("curPageNum")) - curCount
        });
    },

});

Template.study.events({
    "click #btnSearch": function(evt, tmpL) {
        var word = $('#inpSearch').val();
        Session.set('search', word);

    },
    "click #Prev": function(evt, tmpL) {
        var pn = Session.get('curPageNum');
        if(parseInt(pn) <= 1) {
            return alert('첫페이지입니다.')
        }
        Session.set('curPageNum', --pn);
    },
    "click #Next": function(evt, tmpL) {
        var pn = Session.get('curPageNum');
        Session.set('curPageNum', ++pn);
    },

    "click #removeOneItem": function(event, template) {
        //console.log(this);
        //var count = $(e.target).attr('count');
        //var obj = Boards.findOne({글번호: parseInt(count)});
        var ch =prompt('비밀번호를입력하세요.');
        if( ch == 1103)  {
            Meteor.call('removeStudy', this, function(err, rslt) {
                if (err) {
                    //성공시 액션
                }
                else {
                    //실패시 액션
                }
            });
        }
        else{
            alert('비밀번호가 틀렸습니다.')
        }
    },
    "click #cancel": function(e, tmpl) {
        $('#작성자').val('');
        $('#제목').val('');
        $('#본문').val('');
    },
});
