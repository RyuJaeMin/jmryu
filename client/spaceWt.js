Router.route('/spaceWt', 'spaceWt');

Template.spaceWt.events({
    //4
    "click #cancel": function(e, tmpl) {
        var q = confirm('글작성을 취소하시겠습니까?')
        if(q==true){
        $('#작성자').val('');
        $('#제목').val('');
        $('#본문').val('');

        Router.go('/space');
        }
    },
    "click #write": function(e, tmpl) {

        var obj = {};
        obj.작성자 = $('#작성자').val();
        obj.제목 = $('#제목').val();
        if( obj.제목.length <= 0) {
            //error
            return alert('제목을 입력해주세요.');
        }
        obj.본문 = $('#본문').val();
        //글번호를 알아냅시다. 글번호 === 전체 글 갯수 + 1
        //글번호 max값 + 1로 수정
        var board = space.findOne({}, {sort: {'글번호': -1}});
        if(board !== undefined && board !== null) {
            if (board.hasOwnProperty('글번호')) {
                obj.글번호 = parseInt(board.글번호) + 1;
            }
        }
        else {
            obj.글번호 = 0;
        }

        space.insert(obj);
        obj.createdAt = new Date();
        obj.type = 'boardWriting';
        Logs.insert(obj);

        $('#작성자').val('');
        $('#제목').val('');
        $('#본문').val('');

        Router.go('/space');
    }
});
