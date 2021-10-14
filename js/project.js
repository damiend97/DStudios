$(document).ready(() => {
    $('.project').click((e) => {
        e.preventDefault();
        $('#selected-project').css('display','block');
        
        let selectedProjectElement = $('#selected-project');
        let selectedProjectPosition = selectedProjectElement.position();
        let top = selectedProjectPosition.top;

        $('html, body').stop(true, false).animate({
            scrollTop: top
        }, 1000);

        let projectName = $(e.target)[0].innerHTML;
        let imageClass = "";

        switch (projectName) {
            case "Project 1":
                imageClass = "project-1"
                break;
            case "Project 2":
                imageClass = "project-2"
                break;
            case "Project 3":
                imageClass = "project-3"
                break;
            case "Project 4":
                imageClass = "project-4"
                break;
            case "Project 5":
                imageClass = "project-5"
                break;
            case "Project 6":
                imageClass = "project-6"
                break;    
            default:
                break;
        }

        $('#selected-image').removeClass().addClass(imageClass);
        $('#selected-title').html(projectName);
    })
})