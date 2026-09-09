/* =====================================================
   CARROSSEL DOS PROJETOS PYTHON + PANDAS
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(".python-card");


    cards.forEach((card) => {

        const slides = card.querySelectorAll(".python-slide");

        const dots = card.querySelectorAll(".dot");

        const previousButton =
            card.querySelector(".gallery-btn.prev");

        const nextButton =
            card.querySelector(".gallery-btn.next");


        let currentSlide = 0;


        function showSlide(index) {

            currentSlide =
                (index + slides.length) % slides.length;


            slides.forEach((slide, i) => {

                slide.classList.toggle(
                    "active",
                    i === currentSlide
                );

            });


            dots.forEach((dot, i) => {

                dot.classList.toggle(
                    "active",
                    i === currentSlide
                );

            });

        }


        previousButton.addEventListener(
            "click",
            () => {

                showSlide(
                    currentSlide - 1
                );

            }
        );


        nextButton.addEventListener(
            "click",
            () => {

                showSlide(
                    currentSlide + 1
                );

            }
        );


        dots.forEach((dot, index) => {

            dot.addEventListener(
                "click",
                () => {

                    showSlide(index);

                }
            );

        });


        showSlide(0);

    });

});