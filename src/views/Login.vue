<template>
  <div class="contain">
    <bread :bread_list="bread_list"></bread>
    <!--登入頁面 開始-->
    <div class="container login-page">
      <div class="row">
        <div class="hidden-xs col-xs-12 col-sm-12">
          <img class="img-responsive" src="/img/login/buy.png" />
        </div>
        <hr />
        <div class="col-xs-12 col-sm-8">
          <form
            action="/member.html"
            class="form-horizontal"
            method="post"
            role="form"
            novalidate="novalidate"
          >
            <input
              name="__RequestVerificationToken"
              type="hidden"
              value="B7nvV8QVgaqcOUlj8WH53Jqz_sefUftSbnGooAHoVQuZk9Bsiv6zU0YPxr2xzdXpapoq6I4nKuvmj2gZ0nAdUCQ-bep5ETM88nsJEbvTpJA1"
            />
            <div class="form-horizontal">
              <div class="form-group">
                <label class="control-label col-sm-2" for="email">帳號:</label>
                <div class="col-sm-10">
                  <input
                    class="form-control"
                    data-val="true"
                    data-val-email="請輸入有效的電子郵件位址"
                    data-val-required="帳號 欄位是必要項。"
                    id="Email"
                    name="Email"
                    type="text"
                    value=""
                  />
                  <span
                    class="field-validation-valid text-danger"
                    data-valmsg-for="Email"
                    data-valmsg-replace="true"
                  ></span>
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-sm-2" for="pwd">密碼:</label>
                <div class="col-sm-10">
                  <input
                    class="form-control"
                    data-val="true"
                    data-val-required="密碼 欄位是必要項。"
                    id="Password"
                    name="Password"
                    type="password"
                  />
                  <span
                    class="field-validation-valid text-danger"
                    data-valmsg-for="Password"
                    data-valmsg-replace="true"
                  ></span>
                </div>
              </div>

              <div class="form-group">
                <label class="col-sm-2 control-label" for="">驗證碼</label>

                <div class="col-sm-5">
                  <input
                    class="form-control"
                    data-val="true"
                    data-val-required="請輸入驗證碼"
                    id="CaptchaInputText"
                    name="CaptchaInputText"
                    type="text"
                    value=""
                  />
                  <span
                    class="field-validation-valid text-danger"
                    data-valmsg-for="CaptchaInputText"
                    data-valmsg-replace="true"
                  ></span>
                </div>
                <div class="col-sm-5">
                  <img
                    id="CaptchaImage"
                    src="/img/login/Generate.gif"
                    style="max-width: 100%"
                  />
                  <input
                    id="CaptchaDeText"
                    name="CaptchaDeText"
                    type="hidden"
                    value="dfc1e1ef07854a8ab41ebd4285536f18"
                  />

                  <a
                    href="#CaptchaInputText"
                    id="d824b4cc74e24316bd148ab9b1dd34cb"
                    onclick="______dfc1e1ef07854a8ab41ebd4285536f18________()"
                    >換一張</a
                  >
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                  <div class="checkbox">
                    <input
                      data-val="true"
                      data-val-required="記住我 欄位是必要項。"
                      id="RememberMe"
                      name="RememberMe"
                      type="checkbox"
                      value="true"
                    /><input name="RememberMe" type="hidden" value="false" />
                    <label for="RememberMe">記住我</label>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                  <button
                    type="submit"
                    class="btn btn-lg btn-block btn-primary log-in"
                  >
                    登入
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="col-xs-12 col-sm-4 login-right">
          <a href="regist.html" class="btn btn-lg btn-block btn-custom"
            >加入會員</a
          >

          <form
            action="/Account/ExternalLogin?ReturnUrl=%2FProduct%2FProductDetail%2F84be71ac-0aca-498e-ba72-43629c1f8a30"
            method="post"
          >
            <input
              name="__RequestVerificationToken"
              type="hidden"
              value="HyNdjwj1Z-EyUHYNxI1E88JZ4zfnDffqcJP0iDYZ5kJ2HcmUVHCGlyEHTFvMXWz7n1HU_FSPMdNNDFBY3iT3c6nIdpoBY8kgBTrPZwg4D6Q1"
            />
            <div id="socialLoginList">
              <p>
                <button
                  type="submit"
                  class="btn btn-lg btn-fb btn-block"
                  id="Facebook"
                  name="provider"
                  value="Facebook"
                  title="使用 Facebook 帳戶登入"
                >
                  Facebook登入
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!--登入頁面 結束-->
  </div>
</template>

<script>
import bread from '@/components/bread/bread.vue'
export default {
  name: 'Login',
  components: {
    bread,
  },
  data() {
    return {
        bread_list:[
            {id:1,name:'首頁',url:'/'},
            {id:2,name:'會員登入',url:'/login'}
        ]
    }
  },
}
</script>

<style>
.login-right .btn {
  margin-bottom: 15px;
}
.btn-custom {
  color: #fff;
  background-color: #e14344;
  border-color: #d13839;
}

.btn-custom:hover,
.btn-custom:focus,
.btn-custom:active,
.btn-custom.active,
.open .dropdown-toggle.btn-custom {
  color: var(--text-white-color);
  background-color: var(--regist-button-hover-background);
  border-color: var(--regist-button-hover-border-color);
}

.btn-custom.disabled,
.btn-custom[disabled],
fieldset[disabled] .btn-custom,
.btn-custom.disabled:hover,
.btn-custom[disabled]:hover,
fieldset[disabled] .btn-custom:hover,
.btn-custom.disabled:focus,
.btn-custom[disabled]:focus,
fieldset[disabled] .btn-custom:focus,
.btn-custom.disabled:active,
.btn-custom[disabled]:active,
fieldset[disabled] .btn-custom:active,
.btn-custom.disabled.active,
.btn-custom[disabled].active,
fieldset[disabled] .btn-custom.active {
  background-color: var(--regist-button-background);
  border-color: var(--regist-button-border-color);
}

.btn-fb {
  color: #fff;
  background-color: #3b5998;
  border-color: #3b5998;
}

.btn-fb:hover,
.btn-fb:focus,
.btn-fb:active,
.btn-fb.active,
.open .dropdown-toggle.btn-fb {
  color: #fff;
  background-color: #d33738;
  border-color: #c22d2e;
}

.btn-fb:active,
.btn-fb.active,
.open .dropdown-toggle.btn-fb {
  background-image: none;
}

.btn-fb.disabled,
.btn-fb[disabled],
fieldset[disabled] .btn-fb,
.btn-fb.disabled:hover,
.btn-fb[disabled]:hover,
fieldset[disabled] .btn-fb:hover,
.btn-fb.disabled:focus,
.btn-fb[disabled]:focus,
fieldset[disabled] .btn-fb:focus,
.btn-fb.disabled:active,
.btn-fb[disabled]:active,
fieldset[disabled] .btn-fb:active,
.btn-fb.disabled.active,
.btn-fb[disabled].active,
fieldset[disabled] .btn-fb.active {
  background-color:#2a4680;
  border-color: #2a4680;
}

.alert-register {
  border-color: #b28146;
  background-color: #b28146;
  color: #fff;
}

.log-in,
.log-in:hover,
.log-in:focus {
  background-color: #b28146;
  border-color: #b28146;
}
.log-in:hover {
  opacity: 0.8;
}
</style>
