<?php include 'header-inner.php'; ?>
<section class="categories gap gray-bg">
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <div class="bottom-gap text-center">
                    <h2>Login</h2>
                    <p>
                        New User? <a href="#">Create Your Account</a>
                    </p>
                </div>
                <form class="login-form" action="">

                    <div class="col-sm-12"><div class="form-group">
                            <label>Email/Username *</label>
                            <input type="text" aria-label="Name" class="form-control" id="name" >
                        </div>
                    </div>
                    <div class="col-sm-12"><div class="form-group">
                            <label>Password *</label>
                            <input type="email" aria-label="email" class="form-control" id="email">
                        </div>
                    </div>
                    <div class="col-sm-12 text-right">
                        <a href="#" id="forget-pass" class="forgot_pass">Forgot Password?</a>
                    </div>

                    <div class="col-sm-12 quation-btn ">
                        <div class="small-gap">
                            <button type="submit" class="btn blue-btn1">Sign In</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

</section>


<?php include 'footer.php'; ?>