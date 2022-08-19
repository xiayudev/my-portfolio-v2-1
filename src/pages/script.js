import Swal from 'sweetalert2';

const btn = document.getElementById('cta-btn');

btn.addEventListener('submit', (event) => {
    event.preventDefault();
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
            )
        }
    });
})
/**Menu bar icon */
const menu = document.getElementById("menu");
const menu_btn = document.getElementById("menu-btn");

menu_btn.addEventListener("click", () => {
    menu_btn.classList.toggle("open");
    menu.classList.toggle("invisible");
});

//For smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document
            .querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior: "smooth",
            });
    });
});

//  Loader
// 	<script>
// 		$(window).on("load", function () {
// 			$("#loading").hide();
// 		});
//