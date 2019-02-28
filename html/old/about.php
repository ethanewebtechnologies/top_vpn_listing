<?php include 'header-inner.php'; ?>
<section class="categories gap gray-bg">
    <div class="page-header">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-6">
                    <h2>About Us</h2>
                </div>
                <div class="col-sm-6">
                    <form class="search-form">
                        <input type="text" placeholder="Type here products" name="search" aria-label="Search" >
                        <button type="submit"> Search <i class="fa fa-search"></i></button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-3 left-sidebar left-sidebar-inner">
                <div class="category">
                    <h4>Company</h4>
                    <hr>
                    <ul class="side-menu">
                        <li class="active"><a href="#">About Us</a> </li>
                        <li><a href="#">Term of use</a> </li>
                        <li><a href="#">Privacy Policy</a> </li>
                        <li><a href="#">About Us</a> </li>


                    </ul>
                </div>
            </div>
            <div class="col-lg-9 right-sidebar">
                <div class="row">
                    <div class="col-sm-12">
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active">About Us</li>
                        </ul>
                    </div>
                    <div class="profile_view">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>



                </div>
            </div>
        </div>

    </div>
</div>
</section>

<!-- The Modal -->
<div class="modal" id="reviewModal">
    <div class="modal-dialog">
        <div class="modal-content">

            <!-- Modal Header -->
            <div class="modal-header">
                <h4 class="modal-title">Modal Heading</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>

            <!-- Modal body -->
            <div class="modal-body">
                <div class="row">
                    <form class="rating-form" action="">

                        <div class="col-sm-12"><div class="form-group">
                                <label>Full Name *</label>
                                <input type="text" aria-label="Name" class="form-control" id="name">
                            </div>
                        </div>
                        <div class="col-sm-12"><div class="form-group">
                                <label>Email *</label>
                                <input type="email" aria-label="email" class="form-control" id="email">
                            </div>
                        </div>


                        <div class="col-sm-12"><div class="form-group">
                                <label for="country_name" class="field-country_name">Country Name *</label>
                                <label class="arrow">
                                    <select class="form-control" id="Country" aria-label="Country">
                                        <option value="">-</option>
                                        <option>USA</option>
                                        <option>UK</option>
                                        <option>AUS</option>
                                    </select></label>
                            </div></div>


                        <div class="col-sm-12">
                            <div class="form-field field-star_rating"><label for="wpmtst_star_rating" class="field-star_rating">Rating</label><span class="required symbol" aria-required="true"></span><div class="strong-rating-wrapper field-wrap in-form"><fieldset contenteditable="false" id="wpmtst_star_rating" name="star_rating" class="strong-rating" data-field-type="rating" tabindex="0"><input type="radio" id="star_rating-star0" name="star_rating" value="0"><label for="star_rating-star0" title="No stars"></label><input type="radio" id="star_rating-star1" name="star_rating" value="1"><label for="star_rating-star1" title="1 star"></label><input type="radio" id="star_rating-star2" name="star_rating" value="2"><label for="star_rating-star2" title="2 stars"></label><input type="radio" id="star_rating-star3" name="star_rating" value="3"><label for="star_rating-star3" title="3 stars"></label><input type="radio" id="star_rating-star4" name="star_rating" value="4" checked="checked"><label for="star_rating-star4" title="4 stars"></label><input type="radio" id="star_rating-star5" name="star_rating" value="5"><label for="star_rating-star5" title="5 stars"></label></fieldset></div><span class="after"></span></div>
                        </div>
                        <div class="col-sm-12"><div class="form-group">
                                <label>Message *</label>
                                <textarea class="form-control" rows="5" id="comment" aria-label="Message"></textarea>
                            </div></div>



                        <div class="col-sm-12 text-center"></div>
                    </form>
                </div>
            </div>

            <!-- Modal footer -->
            <div class="modal-footer">
                <button type="button" class="btn yellow-btn" data-dismiss="modal">Close</button> <button type="submit" class="btn blue-btn1">Submit</button>
            </div>

        </div>
    </div>
</div>

<?php include 'footer.php'; ?>