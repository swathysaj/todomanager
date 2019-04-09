$(document).ready(function(){

    $('.delete-button').on('click', function (e) {
        $target = $(e.target);
        const id = $target.attr('data-id');
        $.ajax({
           type:'DELETE',
            url:'/'+id,
            success: function (res) {
                alert('Deleting success');
                window.location.href="/"
            },
            error: function (err) {
                console.log(err);
            }
        });
    });
});