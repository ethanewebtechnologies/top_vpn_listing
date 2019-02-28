<?php include 'header-inner.php'; ?>
<section class="categories gap gray-bg">
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <div class="bottom-gap text-center">
                    <h2>REQUEST A QUOTE</h2>
                </div>
                <form class="quation-form" action="">

                    <div class="col-sm-12"><div class="form-group">
                            <label>Full Name *</label>
                            <input type="text" aria-label="Name" class="form-control" id="name" >
                        </div>
                    </div>
                    <div class="col-sm-12"><div class="form-group">
                            <label>Email *</label>
                            <input type="email" aria-label="email" class="form-control" id="email">
                        </div>
                    </div>

                    <div class="col-sm-12"><div class="form-group">
                            <label>Phone Number</label>
                            <input type="email" aria-label="email" class="form-control" id="phone">
                        </div>
                    </div>
                    <div class="col-sm-12"><div class="form-group">
                            <label>your proposed budget</label>
                            <input type="text" name="baget" value="" class="form-control" placeholder="Please enter your proposed budget for the service(s) selected">
                        </div>
                    </div>


                    <div class="col-sm-12"><div class="form-group">
                            <label for="country_name" class="field-country_name">Select Services *</label>
                            <label class="arrow">

                                <select class="form-control" id="Country" aria-label="Country">
                                    <option value="">--</option>
                                    <option value="PPC">PPC</option>
                                    <option value="SEO">SEO</option>
                                    <option value="SMO">SMO</option>
                                    <option value="Reputation Management">Reputation Management</option>
                                    <option value="Website Design and Development">Website Design and Development</option>
                                    <option value="Mobile Apps Development">Mobile Apps Development</option>
                                    <option value="Ecommerce solutions">Ecommerce solutions</option>
                                    <option value="Hire a dedicated resource">Hire a dedicated resource</option>
                                </select>
                            </label>
                        </div></div>


                    <div class="col-sm-12"><div class="form-group">
                            <label>Message *</label>
                            <textarea class="form-control" rows="5" id="comment" aria-label="Message"></textarea>
                        </div></div>



                    <div class="col-sm-12 quation-btn ">
                        <div class="small-gap">
                            <button type="submit" class="btn blue-btn1">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

</section>


<?php include 'footer.php'; ?>