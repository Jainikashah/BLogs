<template>
    <div class="transaction-container">
    <!-- add item modal -->
    <AddItem :modalTitle="'Add Item'" ref="addItemModal" />

    <!-- table -->
    <div>
      <div class="row">
        <div class="col-md-12">

            <h3  class="title-5 m-b-35">Help</h3>

        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                        aria-expanded="false" aria-controls="collapseOne">
                        What is Piggy?
                    </button>
                </h2>
                <!-- add show class after collpase to make it programmatically visible and aria-expanded to true in above element, and rmeove collapsed from above -->
                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Piggy is a multi-tasker. Its a digital solution designed to simplify the process of monitoring and
                        managing your personal as well as professional financial transactions. In this digital era, managing
                        finances is lot more challenging than it ever was. Earlier, where cash was the only medium to
                        undertake financial operations; this digital world has now opened a whole lot of possibilities, by
                        introducing online payment platforms like Paytm, GooglePay, UPI, PhonePe, and many more. Hence, for
                        an individual to maintain the balances of all such platforms at one place can be challenging.
                        Moreover such complexities, often lead to financial stress and instability. Eventually it results
                        into inconsistent track of expenses, inadequate savings, and unfulfilled financial goals.
                        Piggy is a full-fledged web application to let users manage their finances more effectively and all
                        at one place.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        How Piggy can help me?
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Piggy is a web-based solution that help an individual or a group of individuals, in multiple ways.
                        Let's look at some key features of Piggy that can help you and you team.
                        Expense Tracking: Allow users to add and categorize their expenses; provide a clear picture of all
                        the transactions made over a period of time.
                        Income Statement: A graphical and tabular representation of users’ financial inflows.
                        Flexibility: The ability to segregate multiple payment platforms’ transactions from each other.
                        Categorization: To offer data visualization and reports categorically.

                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Who can use Piggy?
                    </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Anyone. Yup, cant simplify that enough, but yeah anyone!

                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header" id="headingFive">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        Is my data safe in Piggy?
                    </button>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        Its as safe as your own piggy bank is. Yeah. Just like you hide in your closet's safest locker, we keep your data in our safest database and have powerful lock around it. Noone, absolutely noone can view, edit, read, write, or delete your data other than you yourself. So, go ahead and start managing your finances better and stay ahead of the world.
                    </div>
                </div>
            </div>

            <div class="accordion-item">
                <h2 class="accordion-header" id="headingSix">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        Privacy & Controls
                    </button>
                </h2>
                <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        As of now, Piggy is not available to any other individual, apart from its owner.
                    </div>
                </div>
            </div>


            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Terms & Conditions
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    At current, Piggy is a private application, created for a university project and is not for public use. The sole owner of this project is Jainika Shah, the web developer. Any other individual other than the owner, donot own any rights of changing, modifying, adding, removing or performing any operations in this application. 
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    </div>
</div></template>

<script>
export default {
    name: "InfoPage",
}
</script>
