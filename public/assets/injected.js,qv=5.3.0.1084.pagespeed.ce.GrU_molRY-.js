var global_lang = document.getElementsByTagName('body')[0].getAttribute('data-lang');


function isThisStandaloneBioArc() {
    let servers = ['bioarc.rhc.ac.ir'];
    if (servers.includes(window.location.hostname.trim())) {
        return true;
    }
    return false;
}

function isThisBioArc(allow_stand_alone = true) {
    let servers = ['bioarc.ir', 'bioark.ir'];
    if (allow_stand_alone) {
        servers = ['bioarc.ir', 'bioark.ir', 'bioarc.rhc.ac.ir'];
    }
    if (servers.includes(window.location.hostname.trim())) {
        return true;
    }
    return false;
}

String.prototype.ReplaceAll = function (str1, str2, ignore) {
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, "\\$&"), (ignore ? "gi" : "g")), (typeof (str2) == "string") ? str2.replace(/\$/g, "$$$$") : str2);
}

String.prototype.toPersianCharacter = function () {
    var string = this;
    var obj = {
        'ك': 'ک',
        'دِ': 'د',
        'بِ': 'ب',
        'زِ': 'ز',
        'ذِ': 'ذ',
        'شِ': 'ش',
        'سِ': 'س',
        'ى': 'ی',
        'ي': 'ی',
        '١': '۱',
        '٢': '۲',
        '٣': '۳',
        '٤': '۴',
        '٥': '۵',
        '٦': '۶',
        '٧': '۷',
        '٨': '۸',
        '٩': '۹',
        '٠': '۰',
    };

    Object.keys(obj).forEach(function (key) {
        string = string.replaceAll(key, obj[key]);
    });
    return string
};

window.mobileAndTabletCheck = function () {
    let check = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};

window.mobileCheck = function () {
    let check = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};


var pondProfile = null;

var persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],
    arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g],
    toEnglishNumber = function (n) {
        if (typeof n === 'string') {
            for (var i = 0; i < 10; i++) {
                n = n.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
            }
        }
        return n;
    }

function toFarsiNumber(n, lang = 'fa') {
    if (n == null || lang != 'fa' && lang != 'local') {
        return n;
    }
    const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

    return n
        .toString()
        .replace(/\d/g, x => farsiDigits[x]);
}

function create_pondProfile(selector, serverid = null) {

    if ($('.filepond--root').length == 1) {
        FilePond.destroy(document.querySelector(selector));
        pondProfile = null;
    }

    FilePond.registerPlugin(
        FilePondPluginImageFilter,
        FilePondPluginImageCrop,
        FilePondPluginImagePreview,
        FilePondPluginImageExifOrientation,
        FilePondPluginFileValidateType,
        FilePondPluginImageResize,
        FilePondPluginImageTransform,
        FilePondPluginImageEdit,
        FilePondPluginPdfConvert,
        FilePondPluginImageOverlay,
        FilePondPluginGetFile,
    );

    //FilePond.registerPlugin(FilepondZipper());

    let csrf = $('meta[name="csrf-token"]').attr('content');

    FilePond.setOptions({
        allowDrop: true,
        allowReplace: true,
        allowRevert: true,
        instantUpload: false,
        imageEditInstantEdit: true,
        credits: false,
        pdfConvertType: 'image/png',
        pdfConvertMarginHeight: 60,
        server: {
            url: '',
            process: {
                url: '/gvfile/ajaxuploadfile/',
                headers: {'X-CSRF-TOKEN': csrf},
            },
            revert: {
                url: '/gvfile/ajaxrevertfile/',
                headers: {'X-CSRF-TOKEN': csrf},
            },
            restore: {
                url: '/gvfile/ajaxrestorefile/',
                headers: {'X-CSRF-TOKEN': csrf},
            },
            load: {
                url: '/gvfile/ajaxloadfile/',
                headers: {'X-CSRF-TOKEN': csrf},
            },
            fetch: {
                url: '/gvfile/ajaxfetchfile/',
                headers: {'X-CSRF-TOKEN': csrf},
            }
        },
        onaddfile: (error, file) => {
            if (file.serverId == null) {
                $('.doc-submit-button').attr('disabled', true);
            }
        },
        onprocessfile: (error, file) => {
            $('.doc-submit-button').attr('disabled', false);
        }
    });


    var metadata = null;


    var files = [];
    serverid = serverid + "";
    if (serverid != '0') {
        serverid.split(',').forEach(id => {
            files.push({
                source: id,
                options: {
                    type: 'local',
                    metadata: {
                        'markup': metadata
                    }
                }
            });
        });
    }

    pondProfile = FilePond.create(document.querySelector(selector), {
        files: files,
        acceptedFileTypes: ['image/*', 'application/pdf', /*'application/zip', 'application/x-compressed', 'application/x-zip-compressed', 'multipart/x-zip'*/],
        imageResizeTargetWidth: 1280,
        imageResizeMode: "contain",
        imageResizeUpscale: "false"
    });

    pondProfile.imageEditEditor = dokaCreate({
        utils: ['crop', 'resize', 'filter', 'color', 'markup'],
        markupFontFamily: 'IranSans',
        markupFontFamilyOptions: [
            ['IranSans', 'IranSans'],
            ['Zar', 'B Zar'],
            ['Titr', 'B Titr'],
            ['Tahoma', 'Tahoma']
        ],
        markupLineStyle: [.005, null],
        onconfirm: (output, item) => {
            console.log(item);
            pondProfile.processFile(item);
        }
    });
}

global_deligate.on('click', '.modal .maximize', function () {
    if ($(this).closest('.modal').hasClass('maximize')) {
        $(this).closest('.modal').removeClass('maximize');
    } else {
        $(this).closest('.modal').addClass('maximize');
    }
});


global_deligate.on('click', '.doka--button-tab', function () {
    global_deligate.on('focus', '.doka--content input', function () {
        return false;
    });
    global_deligate.on('focus', '.doka--button', function () {
        return false;
    });
});


function druginfoclass() {
    $('.druginfo').each(function () {
        $(this).webuiPopover({
            title: 'Drug Usage Info',
            width: 800,
            show: 10,
            style: 'primary',
            closeable: true,
            trigger: 'click',
            type: 'async',
            cache: false,
            url: '/drug/ajaxDrugUsage?drugid=' + $(this).data('drugid') + '&pid=' + $(this).data('pid') + ts()
        });
    });
}

function change_lang(lang) {
    $.ajax({
        type: "GET",
        url: "/home/changeLang" + ts('?'),
        data: 'lang=' + lang,
        success: function () {
            location.reload();
        }
    });
}

function sms_conv() {
    $('.smsconvinfo').each(function () {
        $(this).webuiPopover({
            title: $(this).data('name') + (global_lang == 'fa' ? ' محاورات پیامکی' : ' SMS Conversations'),
            width: 900,
            height: 400,
            show: 10,
            style: 'primary',
            closeable: true,
            trigger: 'click',
            type: 'async',
            cache: false,
            url: '/sms/ajaxsmsconv?mobile=' + $(this).data('mobile') + ts(),
            async: {
                success: function (that, xhr) {
                    /* var elem = $("#" + that.id + " .app-message-chats")[0];
                 //var height = $("#" + that.id + " .app-message-chats")[0].scrollHeight;
                 //elem.scrollTop(elem.scrollHeight);

                 $('.sendsms').maxlength({
                     alwaysShow: true,
                     threshold: 10,
                     warningClass: "label label-info",
                     limitReachedClass: "label label-warning",
                     placement: 'top',
                     preText: 'used ',
                     separator: ' of ',
                     postText: ' chars.'
                 });*/

                },
            }
        });
    });
}

function sendsms(mobile, div) {
    var message = $(div).closest('.send_div').find(' .sendsms').val();

    $.ajax({
        type: "POST",
        url: "/sms/ajaxsendsms" + ts('?'),
        data: 'mobile=' + mobile + '&message=' + message,
        success: function (msg) {
            if (msg != 'nok') {
                $('.smsconvinfo').webuiPopover('hide');
            } else {
                if (global_lang == 'en') {
                    swal({
                        title: 'Send Limit',
                        text: 'Please Try within 30 second!',
                        type: "warning"
                    });
                } else {
                    swal({
                        title: 'محدودیت ارسال',
                        text: 'لطفا ۳۰ ثانیه دیگر مجدداْ تلاش نمایید.',
                        type: "warning"
                    });
                }
            }
        }
    });
}

function drugextrainfoclass() {
    $('.drugextrainfo').each(function () {
        $(this).webuiPopover({
            title: $(this).data('name') + ' Info',
            width: 800,
            show: 10,
            style: 'primary',
            closeable: true,
            trigger: 'click',
            type: 'async',
            cache: false,
            url: '/drug/ajaxDrugInfo?drugid=' + $(this).data('drugid') + ts()
        });
    });
}

function change_supervisor(id) {
    $.ajax({
        type: "POST",
        url: "/user/ajaxChangeSupervisor" + ts('?'),
        data: 'id=' + id,
        success: function (obj) {
            if (obj.status == 'ok') {
                if (obj.needs_refresh) {
                    localStorage.removeItem("visit_template_rx");
                    localStorage.removeItem("visit_template_simple");
                    localStorage.removeItem("visit_template_advance");
                }
                $('body').append('<div class="modal-backdrop fade show modal_change_location"><h1 style="padding: 15px;"><i class="icon md-rotate-' + (global_lang == 'fa' ? 'left' : 'right') + '" aria-hidden="true"></i>' + (global_lang == 'fa' ? 'تغییر سوپروایزر به: ' : 'Change Supervisor to: ') + obj.title + '</h1></div>');
                location.reload();

                /*$.ajax({
                    type: "GET",
                    url: location.href + ts('?'),
                    success: function (response) {
                        location.reload();
                    },
                    error: function (response) {
                        location = "/home/index";
                    },
                });*/
            }
        }
    });
}

function change_clinic(cid) {

    $.ajax({
        type: "POST",
        url: "/user/ajaxChangeClinic" + ts('?'),
        data: 'cid=' + cid,
        success: function (obj) {
            if (obj.status == 'ok') {
                if (obj.needs_refresh || true) {
                    localStorage.removeItem("visit_template_rx");
                    localStorage.removeItem("visit_template_simple");
                    localStorage.removeItem("visit_template_advance");
                }
                $('body').append('<div class="modal-backdrop fade show modal_change_location"><h1 style="padding: 15px;"><i class="icon md-rotate-' + (global_lang == 'fa' ? 'left' : 'right') + '" aria-hidden="true"></i>' + (global_lang == 'fa' ? 'تغییر مرکز به: ' : 'Change Center to: ') + obj.title + '</h1></div>');
                //location.reload();

                $.ajax({
                    type: "GET",
                    url: location.href + ts('?'),
                    success: function (response) {
                        location.reload();
                    },
                    error: function (response) {
                        location = "/home/index";
                    },
                });
            }
        }
    });
}

function change_ward(cid, wid) {
    $.ajax({
        type: "POST",
        url: "/user/ajaxChangeWard" + ts('?'),
        data: 'cid=' + cid + '&wid=' + wid,
        success: function (obj) {
            if (obj.status == 'ok') {
                if (obj.needs_refresh) {
                    localStorage.removeItem("visit_template_rx");
                    localStorage.removeItem("visit_template_simple");
                    localStorage.removeItem("visit_template_advance");
                }
                $('body').append('<div class="modal-backdrop fade show modal_change_location"><h1 style="padding: 15px;"><i class="icon md-rotate-' + (global_lang == 'fa' ? 'left' : 'right') + '" aria-hidden="true"></i>' + (global_lang == 'fa' ? 'تغییر بخش به: ' : 'Change Ward to: ') + obj.title + '</h1></div>');
                location.reload();

                /*$.ajax({
                    type: "GET",
                    url: location.href + ts('?'),
                    success: function (response) {
                        location.reload();
                    },
                    error: function (response) {
                        location = "/home/index";
                    },
                });*/
            }
        }
    });
}


global_deligate.on('keyup', 'input.fee', function () {
    const value = this.value.replace(/,/g, '');
    if (value != '') {
        this.value = parseFloat(value).toLocaleString('en-US', {
            style: 'decimal',
            maximumFractionDigits: 0,
            minimumFractionDigits: 0
        });
    }
});

global_deligate.on('click', '.three_way input[type="checkbox"]', function (ev) {
    ev.preventDefault();
    let that = this;
    let parent_id = $(this).closest('.medical_doc_custom_form').data('parentid');
    let point_id = $(this).closest('.mainform').data('pointoptionid');

    setTimeout(function () {
        let val = $(that).val();
        $(that).removeClass('yesval').removeClass('noval');
        if (val == '') {
            $(that).val('1');
            $(that).prop("checked", true);
            $(that).addClass('yesval');
        } else if (val == '1') {
            $(that).val('0');
            $(that).addClass('noval');
        } else {
            $(that).val('');
            $(that).prop("checked", false);
        }
        if (typeof check_activate === "function" && $(that).data('show_on_active') != undefined) {
            clearTimeout(check_activateTimer);
            check_activateTimer = setTimeout(check_activate, 10, parent_id, point_id);
        }
    }, 110);
});

function showhideonchange(id, type, artifacts, focus, valtocheck) {
    if (type === 'radio') {
        valtocheck = valtocheck || '1';
        showhideonchange2(id, type, artifacts, valtocheck, false);
        $('input[type=radio][name=' + id + ']').change(function () {
            showhideonchange2(id, type, artifacts, valtocheck, focus);
        });
    } else if (type === 'select') {
        valtocheck = valtocheck || '1';
        showhideonchange2(id, type, artifacts, valtocheck, false);
        $('#' + id).change(function () {
            showhideonchange2(id, type, artifacts, valtocheck, focus);
        });
    } else if (type === 'checkbox') {
        showhideonchange2(id, type, artifacts, 'on', false);
        $('input[type=checkbox][name=' + id + ']').change(function () {
            showhideonchange2(id, type, artifacts, 'on', focus);
        });
    }
}

function showhideonchange2(id, type, artifacts, checkval, focus) {
    var value = '';
    if (type === 'radio' || type === 'checkbox')
        value = $('input[name="' + id + '"]:checked').val();
    else
        value = $('#' + id).val();

    var arr = artifacts.split(",");

    if (checkval.indexOf(value) >= 0) {
        arr.forEach(function (item) {
            $('#' + item).closest("div.form-material").show();
            if (focus) {
                $('#' + item).focus();
                focus = false;
            }
            changeInputWidth();
        })
    } else {
        arr.forEach(function (item) {
            $('#' + item).closest("div.form-material").hide();
        })
    }
}


function checkAnnounceNumber() {
    $.ajax({
        type: "POST",
        url: "/announcement/ajaxGetUnreadAnnouncement" + ts('?'),
        success: function (number) {

            $('#unreadann-1').html(number);
            $('#unreadann-2').html('New ' + number);
            $('#unreadann-3').html(number + ' Unread');
            if (number == '1') {
                $('#unreadann-3').html('One Unread');
            }
            if (number == '0') {
                $('#unreadann-1').hide();
                $('#unreadann-2').hide();
                $('#unreadann-3').hide();
            } else {
                $('#unreadann-1').show();
                $('#unreadann-2').show();
                $('#unreadann-3').show();
            }
        }
    });
}

function afterrefresh() {

    jQuery('tbody tr .checkboxes').on('ifChecked ifUnchecked', function () {
        var set = '#' + jQuery(this).closest('table').attr('id');
        $(this).parents('tr').toggleClass("active");
    });
    $('#example_length .form-control').removeClass('form-control');
    $('#example_length select').select2({
        dir: $("body").attr("dir"),
        width: '70px'
    });
}

function selectedRequest(set, action, type) {

    var selected = $(set + ' tbody tr .selectable-item:checked');
    if (selected.length > 0) {
        if (action == 'delete' && type != 1) {
            $('#deleteconfirmation').modal({show: true});
            return;
        }
        var idis = '';
        for (var i = 0; i < selected.length; i = i + 1) {
            idis += $(selected[i]).attr("value") + ',';
        }
        ajaxRequest(set, idis, action, 2);
    }
}


function RestoreVisit(vid, type) {
    if (type == 0) {
        $('#restore_confirm_val').val(vid);
        $('#restore_confirm').modal({show: true});
        return;
    } else {
        $.ajax({
            url: '/visit/ajaxRestore?vid=' + vid + ts(),
            context: document.body
        }).done(function () {
            $('#example').dataTable().fnDraw(false);
        })
    }
}

jQuery(document.body).on('click', '.btn-xs', function (event) {
    var btn = this;
    var set = '#' + jQuery(this).closest('table').attr('id');
    var id = jQuery(btn).parent().attr('val');
    if (jQuery(btn).hasClass('approvebtn')) {
        ajaxRequest(set, id, 'approve');
    } else if (jQuery(btn).hasClass('rejectbtn')) {
        ajaxRequest(set, id, 'reject');
    } else if (jQuery(btn).hasClass('deletebtn')) {
        ajaxRequest(set, id, 'delete');
    } else if (jQuery(btn).hasClass('deletebtn2')) {
        ajaxRequest2(set, id, 'delete');
    } else if (jQuery(btn).hasClass('approveselected')) {
        selectedRequest(set, 'approve');
    } else if (jQuery(btn).hasClass('rejectselected')) {
        selectedRequest(set, 'reject');
    } else if (jQuery(btn).hasClass('deleteselected')) {
        selectedRequest(set, 'delete');
    }
});


function _guess_money(visitid, insuranceid, finalguessdivid, controller) {
    if (finalguessdivid == null)
        finalguessdivid = 'finalguess';
    if (visitid != null && insuranceid != null) {
        $.ajax({
            url: controller,
            type: 'POST',
            data: 'visitid=' + visitid + '&insuranceid=' + insuranceid
        }).done(function (finalguess) {
            $('#' + finalguessdivid).text('');
            $('#' + finalguessdivid).html(finalguess);
        });
    } else {
        $('#' + finalguessdivid).text('0');
    }
}

function calc_money(money, discount, prepayed_money, finalcostdivid) {
    if (finalcostdivid == null)
        finalcostdivid = 'finalcost';
    var final = money * (100 - discount) / 100 - prepayed_money;
    $('#' + finalcostdivid).html(final);
}

function _send_patient_register_data(id, nationalcode, name, mobile, email, controller, natiobaldiv, namediv) {
    $.ajax({
        url: controller,
        type: 'POST',
        data: 'id=' + id + '&nationalcode=' + nationalcode + '&name=' + name + '&mobile=' + mobile + '&email=' + email
    }).done(function (htmlret) {
        if (htmlret == 'ok') {
            is_registered_user($(natiobaldiv).val(), $(namediv).val());
        }
    });
}

var persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g];
var persianNumbers2 = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
var latinNumbers = [/0/g, /1/g, /2/g, /3/g, /4/g, /5/g, /6/g, /7/g, /8/g, /9/g];

function convertNumber(str, lang) {
    if (lang == "en") {
        for (var i = 0; i < 10; i++) {
            str = str.replace(persianNumbers[i], i);
        }
    } else {
        for (var i = 0; i < 10; i++) {
            str = str.replace(latinNumbers[i], persianNumbers2[i]);
        }
    }
    // console.log(str);
    return str;
}

function updateEvent(id, title, calendarid) {
    if (calendarid == null)
        calendarid = 'calendar';

    $('#' + calendarid).fullCalendar('removeEvents', id);
    $('#' + calendarid).fullCalendar('refetchEvents');
}


$('body').on('hidden.bs.modal', '.modal', function () {
    $(this).removeData('bs.modal');
});


// fix scroll problem.
function refreshBackgrounds(selector) {
    $(selector).each(function () {
        var $this = $(this);
        var opacity = $this.css("opacity");

        if (opacity > 0) $this.css({"opacity": opacity - 0.00001});

        setTimeout(function () {
            $this.css({"opacity": opacity});
        }, 1);
    });
}

function popoverfunc(vid, fieldname, fieldtitle, type, ajaxstring, datatype) {
    $('#' + fieldname + '-popover').webuiPopover({
        title: 'Previous values of ' + fieldtitle,
        width: 500,
        show: 10,
        closeable: true,
        trigger: 'click',
        type: 'async',
        url: '/visit/ajaxLoadLastVisits?vid=' + vid + '&fieldname=' + fieldname + '&fieldtitle=' + fieldname + '&datatype=' + datatype + '&type=' + type + ajaxstring + ts()
    });
}

function popoverhelp(id, trigger = 'click') {
    $('#' + id + '-help-popover').webuiPopover({
        title: 'Help',
        placement: 'horizontal',
        container: '.page-content',
        style: 'info',
        width: 500,
        show: 10,
        closeable: true,
        trigger: trigger,
        type: 'async',
        url: '/disease/ajaxLoadHelp?id=' + id + ts()
    });
}

function i18nlang(id, trigger = 'click') {
    //console.log('.' + id + '-i18n-popover');
    $('.' + id + '-i18n-popover').webuiPopover({
        title: 'i18n Local Translation',
        placement: 'horizontal',
        container: '.page-content',
        style: 'info',
        width: 500,
        show: 10,
        closeable: true,
        trigger: trigger,
        type: 'async',
        url: '/disease/ajaxLoadi18n?id=' + id + ts()
    });
}


function usernote(vid, step) {
    $('#note_' + vid + '_' + step).webuiPopover({
        title: 'User Note (Step: ' + step + ')',
        width: 600,
        show: 10,
        style: 'warning',
        closeable: true,
        trigger: 'click',
        type: 'async',
        cache: false,
        url: '/visit/ajaxLoadUserNote?vid=' + vid + '&step=' + step + ts()
    });
}

function usernotelist(vid) {
    $('#usernote_' + vid).webuiPopover({
        title: 'User Notes',
        width: 600,
        show: 10,
        style: 'warning',
        closeable: true,
        trigger: 'click',
        type: 'async',
        cache: false,
        url: '/visit/ajaxLoadUserNote?vid=' + vid + ts()
    });
}

function usernotelist2(pid) {
    $('#usernote_' + pid).webuiPopover({
        title: 'User Notes',
        width: 600,
        show: 10,
        style: 'warning',
        closeable: true,
        trigger: 'click',
        type: 'async',
        cache: false,
        url: '/visit/ajaxLoadUserNote?pid=' + pid + ts()
    });
}

function changevisitdate(vid) {
    $('#changevisitdate_' + vid).webuiPopover({
        title: (global_lang == 'en' ? 'Change Visit Date' : 'تغییر تاریخ ویزیت'),
        width: 240,
        show: 10,
        closeable: true,
        trigger: 'click',
        type: 'async',
        cache: false,
        url: '/visit/ajaxLoadEditDate?vid=' + vid + ts(),
    });
}

function changevisittype(vid) {
    $('#changevisittype_' + vid).webuiPopover({
        title: 'Change Visit Type',
        width: 400,
        height: 400,
        show: 10,
        closeable: true,
        trigger: 'click',
        type: 'async',
        cache: false,
        url: '/visit/ajaxLoadEditType?vid=' + vid + ts(),
    });
}

function load_html_visit(vid, path, dname) {
    $('#load_html_visit_' + vid).webuiPopover({
        placement: 'horizontal',
        title: dname,
        width: 1000,
        height: 500,
        style: 'html_visit',
        backdrop: true,
        closeable: true,
        trigger: 'click',
        type: 'async',
        cache: false,
        url: path
    });
}

function visitmove(vid) {
    $('#visitmove_' + vid).webuiPopover({
        title: 'Move Visit',
        width: 600,
        show: 10,
        style: 'visitmove',
        closeable: true,
        trigger: 'click',
        type: 'async',
        cache: false,
        url: '/visit/ajaxLoadVisitMove?vid=' + vid + ts(),
    }).on('shown.webui.popover', function (e, tgt) {
        $('div.webui-popover-content .select2').select2({
            dir: $("body").attr("dir"),
            dropdownParent: $('.webui-popover-content')
        });
    })
}

function patientmove(pid) {
    $('#patientmove_' + pid).webuiPopover({
        title: 'Move Patient',
        width: 600,
        show: 10,
        style: 'patientmove',
        closeable: true,
        trigger: 'click',
        type: 'async',
        cache: false,
        url: '/patient/ajaxLoadPatientMove?pid=' + pid + ts(),
    }).on('shown.webui.popover', function (e, tgt) {
        $('div.webui-popover-content .select2').select2({
            dir: $("body").attr("dir"),
            dropdownParent: $('.webui-popover-content')
        });
    });
}

function loadSuppUser(uid, vid) {
    $.ajax({
        type: "GET",
        url: '/visit/ajaxMove?uid=' + uid + '&vid=' + vid + ts(),
        success: function (msg) {
            $('#Move_To_Supp_div_' + vid).html(msg);
            $('.Move_To_Supp').select2({
                dir: $("body").attr("dir"),
                dropdownParent: $('.webui-popover-content'),
                style: 'btn-select',
                iconBase: 'icon',
                tickIcon: 'md-check',
            });
        }
    });
}


function popovertoxicity(id, checkid) {
    $('#' + checkid).webuiPopover({
        container: $(this).closest('form'),
        title: 'Drug Adverse Effect',
        width: 900,
        show: 10,
        backdrop: true,
        closeable: true,
        trigger: 'manual',
        type: 'async',
        placement: 'horizontal',
        url: '/drug/ajaxLoadToxicity?type=submit&id=' + id + ts()
    }).on('hide.webui.popover', function (e, tgt) {
        var data = $("#table_toxicity_" + id).serialize();
        $('#toxicity_sel_' + id).val(data);
    });
}


function popovertoxicity_result(id, elemID) {
    $('#' + elemID).webuiPopover({
        title: 'Drug Adverse Effect',
        width: 700,
        show: 10,
        backdrop: true,
        closeable: true,
        trigger: 'click',
        type: 'async',
        placement: 'horizontal',
        url: '/drug/ajaxLoadToxicity?type=read&id=' + id + ts()
    });
}

function changeVisitDate(vid) {
    var date = $('#visit_date_' + vid + '_unix').val();
    $('#changevisitdate_' + vid).webuiPopover('hide');
    $.ajax({
        type: "POST",
        url: '/visit/ajaxChangeVisitDate?vid=' + vid + ts(),
        data: "date=" + date,
        success: function (msg) {
            if (msg !== 'nok') {
                $('#example').dataTable().fnDraw(false);
                $('#visitDateCurrent').text(msg);
            } else {
                $('#changevisitdate_' + vid).webuiPopover('show');
                alert('A problem in changing visit date!');
            }
        }
    });
}

function changeVisitType(vid) {
    var type = $('#disease_type_' + vid).val();
    $('#changevisittype_' + vid).webuiPopover('hide');
    $.ajax({
        type: "POST",
        url: '/visit/ajaxChangeVisitType?vid=' + vid + ts(),
        data: "type=" + type,
        success: function (msg) {
            if (msg !== 'nok') {
                $('#example').dataTable().fnDraw(false);
            } else {
                $('#changevisittype_' + vid).webuiPopover('show');
                alert('A problem in changing visit type!');
            }
        }
    });
}


function moveVisit(vid) {
    var to = $('#Move_To_User_' + vid).val();
    var supp = $('#Move_To_Supp_' + vid).val();
    $('#visitmove_' + vid).webuiPopover('hide');
    $.ajax({
        type: "POST",
        url: '/visit/ajaxMoveSupp?vid=' + vid + ts(),
        data: "to=" + to + "&supp=" + supp,
        success: function (msg) {
            if (msg == 'ok') {
                $('#example').dataTable().fnDraw(false);
            } else {
                $('#visitmove_' + vid).webuiPopover('show');
                alert('A problem in moving visit!');
            }
        }
    });
}

function movePatient(pid) {
    var to = $('#Move_To_User_' + pid).val();
    var supp = $('#Move_To_Supp_' + pid).val();
    $('#patientmove_' + pid).webuiPopover('hide');
    $.ajax({
        type: "POST",
        url: '/patient/ajaxMoveSupp?pid=' + pid + ts(),
        data: "to=" + to + "&supp=" + supp,
        success: function (msg) {
            if (msg == 'ok') {
                $('#example').dataTable().fnDraw(false);
            } else {
                $('#patientmove_' + pid).webuiPopover('show');
                alert('A problem in moving visit!');
            }
        }
    });
}


function deleteSample(set, bid, controller) {
    $.ajax({
        type: "POST",
        url: controller,
        data: "bid=" + bid,
        success: function (msg) {
            if (msg == 'ok') {
                console.log('.tube_' + bid);
                $('.tube_' + bid).hide();
                $(set).dataTable().fnDraw(false);
            } else {
                alert('A problem in removing sample!');
            }
        }
    });
}


function save_help(id) {
    var content = $('#help_content_' + id).val();

    $.ajax({
        type: "POST",
        url: '/disease/ajaxHelp' + ts('?'),
        data: "id=" + id + '&action=edit' + '&content=' + content,
        success: function (msg) {
            if (msg === 'ok') {
                $('#help_content_' + id).text(content);
                $('#' + id + '-help-popover').addClass('helpactivepoint');
            } else {
                alert('A problem in saving help content!');
            }
        }
    });
}

function cancel_help(id) {
    $.ajax({
        type: "POST",
        url: '/disease/ajaxHelp' + ts('?'),
        data: "id=" + id + '&action=delete',
        success: function (msg) {
            if (msg === 'ok') {
                $('#help_content_' + id).text('');
                $('#' + id + '-help-popover').removeClass('helpactivepoint');
            } else {
                alert('A problem in removing help content!');
            }
        }
    });
}

function save_i18n(id) {
    var content = $('#i18n_content_' + id).val();

    $.ajax({
        type: "POST",
        url: '/disease/ajaxi18n' + ts('?'),
        data: "id=" + id + '&action=edit' + '&content=' + content,
        success: function (msg) {
            if (msg === 'ok') {
                $('#i18n_content_' + id).text(content);
                $('.' + id + '-i18n-text').text(content);
                $('.' + id + '-i18n-popover').addClass('i18nactivepoint');
            } else {
                alert('A problem in saving help content!');
            }
        }
    });
}

function cancel_i18n(id) {
    $.ajax({
        type: "POST",
        url: '/disease/ajaxi18n' + ts('?'),
        data: "id=" + id + '&action=delete',
        success: function (msg) {
            if (msg === 'ok') {
                $('#i18n_content_' + id).text('');
                $('.' + id + '-i18n-popover').removeClass('i18nactivepoint');
                location.reload();
            } else {
                alert('A problem in removing help content!');
            }
        }
    });
}

function save_user_note(vid, step) {
    var content = $('#user_note_content_' + vid + '_' + step).val();

    $.ajax({
        type: "POST",
        url: '/visit/ajaxUserNote' + ts('?'),
        data: 'vid=' + vid + '&step=' + step + '&action=edit' + '&content=' + content,
        success: function (msg) {
            if (msg !== 'nok') {
                $('#note_' + vid + '_' + step).addClass('hasnote');
                $('#note_' + vid + '_' + step).removeClass('nonote');
                $('#note_' + vid + '_' + step).removeClass('donenote');
                $('#user_note_content_' + vid + '_' + step).val('');
                $('#user_note_content_' + vid + '_' + step).text('');
                $('#table_' + vid + '_' + step + '  tr:last').after(msg);
                $('#save_' + vid + '_' + step).show().delay(3000).fadeOut();
                $('#table_' + vid + '_' + step).show();
            } else {
                alert('A problem in saving user note content!');
            }
        }
    });
}

function untick_user_note(vid, step, id) {
    $.ajax({
        type: "POST",
        url: '/visit/ajaxUserNote' + ts('?'),
        data: 'vid=' + vid + '&step=' + step + '&id=' + id + '&action=untick',
        success: function (msg) {
            if (msg !== 'nok') {
                $('#usernote_' + id).addClass('tick_note_div_0');
                $('#usernote_' + id).removeClass('tick_note_div_1');
                $('#example').DataTable().ajax.reload(null, false);

                $('.user_note').removeClass('hasnote');
                $('.user_note').removeClass('donenote');

                if (msg == 'newnote') {
                    $('.user_note').addClass('hasnote');
                } else if (msg == 'donenote') {
                    $('.user_note').addClass('donenote');
                }
            } else {
                alert('A problem in un-ticking user note content!');
            }
        }
    });
}

function tick_user_note(vid, step, id) {
    $.ajax({
        type: "POST",
        url: '/visit/ajaxUserNote' + ts('?'),
        data: 'vid=' + vid + '&step=' + step + '&id=' + id + '&action=tick',
        success: function (msg) {
            if (msg !== 'nok') {
                $('#usernote_' + id).addClass('tick_note_div_1');
                $('#usernote_' + id).removeClass('tick_note_div_0');
                $('#example').DataTable().ajax.reload(null, false);

                var usernoteId = '#note_' + vid + '_' + step;

                $(usernoteId).removeClass('hasnote');
                $(usernoteId).removeClass('donenote');

                if (msg == 'newnote') {
                    $(usernoteId).addClass('hasnote');
                } else if (msg == 'donenote') {
                    $(usernoteId).addClass('donenote');
                }
            } else {
                alert('A problem in ticking user note content!');
            }
        }
    });
}

function cancel_user_note(vid, step, id) {
    $.ajax({
        type: "POST",
        url: '/visit/ajaxUserNote' + ts('?'),
        data: 'vid=' + vid + '&step=' + step + '&id=' + id + '&action=delete',
        success: function (msg) {
            var usernoteId = '#note_' + vid + '_' + step;
            $(usernoteId).removeClass('hasnote');
            $(usernoteId).removeClass('donenote');
            $(usernoteId).removeClass('nonote');

            if (msg === 'nonote') {
                $('#usernote_' + id).remove();
                $('#' + vid + '_' + step).addClass('nonote');
                $('#' + vid + '_' + step).removeClass('hasnote');
                $('#' + vid + '_' + step).removeClass('donenote');
                $('#delete_' + vid + '_' + step).show().delay(3000).fadeOut();
                $('#table_' + vid + '_' + step).hide();
                $(usernoteId).addClass('nonote');

            } else if (msg === 'newnote') {
                $('#usernote_' + id).remove();
                $('#' + vid + '_' + step).addClass('hasnote');
                $('#' + vid + '_' + step).removeClass('nonote');
                $('#' + vid + '_' + step).removeClass('donenote');
                $('#delete_' + vid + '_' + step).show().delay(3000).fadeOut();
                $(usernoteId).addClass('hasnote');
            } else if (msg === 'donenote') {
                $('#usernote_' + id).remove();
                $('#' + vid + '_' + step).addClass('donenote');
                $('#' + vid + '_' + step).removeClass('hasnote');
                $('#' + vid + '_' + step).removeClass('nonote');
                $('#delete_' + vid + '_' + step).show().delay(3000).fadeOut();
                $(usernoteId).addClass('donenote');
            } else {
                alert('A problem in removing user note content!');
            }
        }
    });
}

$(window).on('resize', function () {
    changeInputWidth();
});

function changeInputWidth() {
    $('.form-inline').each(function () {
        var W = $(this).width();
        var label1W = $(this).find('.label1form').width();
        var label2W = 0;
        if ($(this).find('.label2form').length) {
            label2W = $(this).find('.label2form').width();
        }

        var labelW = W - label1W - label2W - 10;

        if (labelW < 35) {
            labelW = W - label2W;
        }

        if (labelW < 35) {
            labelW = W;
        }

        $(this).find('typeahead__container').width(labelW - 40);
        $(this).find('input').width(labelW - 40);
        //console.log(labelW - 50);
    });
}

function isValidIranianNationalCode(input) {
    if (!/^\d{10}$/.test(input))
        return false;

    var check = parseInt(input[9]);
    var sum = 0;
    var i;
    for (i = 0; i < 9; ++i) {
        sum += parseInt(input[i]) * (10 - i);
    }
    sum %= 11;

    return (sum < 2 && check == sum) || (sum >= 2 && check + sum == 11);
}

function check_national_code() {
    var nationalID = $('#national_code')[0].value.replace(/-/g, "").replace(/ /g, "");

    if (nationalID.length < 10 || (nationalID[0].toLowerCase() != 'x' && !isValidIranianNationalCode(nationalID))) {
        $("#form-demography :input").prop("disabled", true);
        $("#national_code").prop("disabled", false);
        $('#national_code').focus();
    }
}


function Is_Avail_Check(radioId, tableId) {
    /*$('input[type=radio][name=' + radioId + ']').change(function () {
    Is_Avail_Check(radioId, tableId);
});*/
    var temp = $('input[name="' + radioId + '"]:checked').val();
    $('input[type=radio][name=' + radioId + ']').closest('.panel-heading').removeClass('roundheading-null', 1000, "easeOutBounce");
    $('input[type=radio][name=' + radioId + ']').closest('.panel-heading').removeClass('roundheading-0', 1000, "easeOutBounce");
    if (temp == '1') {
        $('#' + tableId).slideDown();
        changeInputWidth();
    } else if (temp == '0') {
        $('#' + tableId).slideUp();
        $('input[type=radio][name=' + radioId + ']').closest('.panel-heading').addClass('roundheading-0', 1000, "easeOutBounce");
    } else {
        $('#' + tableId).slideUp();
        $('input[type=radio][name=' + radioId + ']').closest('.panel-heading').addClass('roundheading-null', 1000, "easeOutBounce");
    }
    $('table').each(function () {
        $(this).trigger('reflow');
    });
}

function calcBMI() {
    var bmi = ($("#General_Examination_Weight").val() * 10000) / ($("#General_Examination_Height").val() * $("#General_Examination_Height").val());
    bmi = Math.round(bmi);
    if (isNaN(bmi)) bmi = '';
    $("#General_Examination_BMI").val(bmi);
}

function calcBSA() {
    var bsa = Math.sqrt(($("#General_Examination_Weight").val() * $("#General_Examination_Height").val()) / 3600) * 100;
    bsa = Math.round(bsa) / 100;
    if (isNaN(bsa)) bsa = '';
    $("#General_Examination_BSA").val(bsa);
}

function help_click(thiss) {
    var id = $(thiss).data('id');
    if (typeof $(thiss).data('target') === 'undefined') {
        //popoverhelp(id, 'manual');
        $(thiss).webuiPopover({
            title: (global_lang == 'en' ? 'Help' : 'راهنما'),
            placement: 'horizontal',
            container: '.page-content',
            style: 'info',
            width: 500,
            show: 10,
            closeable: true,
            trigger: 'manual',
            type: 'async',
            url: '/disease/ajaxLoadHelp?id=' + id + ts()
        });
    }
    $(thiss).webuiPopover('show');
}

function i18n_click(thiss) {
    var id = $(thiss).data('id');
    if (typeof $(thiss).data('id') === 'undefined') {
        var classe = $(thiss).attr("class");
        var classes = classe.split(" ");
        for (var i = 0; i < classes.length; i++) {
            if (classes[i] == 'i18nlang') continue;
            if (classes[i] == 'i18nactivepoint') continue;

            id = classes[i].split("-i18n-")[0];
            $(thiss).data('id', id);
            break;
        }
    }

    if (typeof $(thiss).data('target') === 'undefined') {
        //i18nlang(id, 'manual');
        $(thiss).webuiPopover({
            title: 'i18n Local Translation',
            placement: 'horizontal',
            container: '.page-content',
            style: 'info',
            width: 500,
            show: 10,
            closeable: true,
            trigger: 'manual',
            type: 'async',
            url: '/disease/ajaxLoadi18n?id=' + id + ts()
        });
    }
    $(thiss).webuiPopover('show');
}

function getGraphyPointSum(identifiers) {
    identifier_arr = identifiers.split(',');
    let sum = 0;
    for (let i = 0; i < identifier_arr.length; i++) {
        sum += getGraphyPointVal2(identifier_arr[i]);
    }
    return sum;
}


function getGraphyPointVal(identifiers, type = 'sum') {
    let identifier_arr = identifiers.split(',');
    let sum = 0;
    $('.medicaldoc.custom_form_graphy').each(function () {
        let data = $(this).data('data');
        if (data != '') {
            let obj = data;
            if (typeof obj === 'string') {
                obj = JSON.parse(data);
            }
            Object.keys(obj).forEach(key => {
                for (let i = 0; i < identifier_arr.length; i++) {
                    if (key == identifier_arr[i]) {
                        if (type == 'sum') {
                            sum += parseFloat(obj[key]);
                        } else if (type == 'sum') {
                            sum += 1;
                        }
                    }
                }
            });
        }
    });
    return sum;
}

function getSingleGraphyPointVal(identifier, key = null, default_val = 0) {
    let data = $(identifier).data('data');
    if (data != '') {
        let obj = JSON.parse(data);
        if (key == null) {
            Object.keys(obj).forEach(key => {
                default_val = obj[key];
            });
        } else {
            default_val = obj[key];
        }
    }
    return parseFloat(default_val);
}


$(document).ready(function () {
    tippy.delegate("body", {
        target: '.bio_tooltip',
        allowHTML: true,
        interactive: $(this).hasClass('interactive'),
        content(reference) {
            return $(reference).data('title');
        }
    });

    window.lazySizesConfig = window.lazySizesConfig || {};
    lazySizesConfig.preloadAfterLoad = true;

    $('.js-typeahead').each(function () {
        $.typeahead({
            input: this,
            source: {
                ajax: {
                    type: "GET",
                    url: "/visit/ajaxGetTypeAhead?table=" + $(this).data('tablename') + "&column=" + this.id + ts()
                }
            },
            cache: false,
            minLength: 1,
            ttl: 86400000,
            cancelButton: false
        });
    });


    if (document.getElementById('demo_switchery')) {
        var switchery = new Switchery(document.getElementById('demo_switchery'), {
            size: 'large',
            color: '#f44336',
        });
    }
    if (document.getElementById('tour_switchery')) {
        var switchery_tour = new Switchery(document.getElementById('tour_switchery'), {
            size: 'large',
            color: '#f44336',
        });
    }

    /*$('.select2').each(function () {
    $(this).select2();
});*/

    changeInputWidth();

    /*
    var isWebkit = 'WebkitAppearance' in document.documentElement.style;
    if (isWebkit) {
        $(".scrollable").scroll(function () {
            refreshBackgrounds(".panel-bg");
        });
        $('body').bind('touchmove', function (e) {
            refreshBackgrounds(".panel-bg");
        });

    }*/

    $("#General_Examination_Height").keyup(function () {
        calcBMI();
        calcBSA();
    });
    $("#General_Examination_Weight").keyup(function () {
        calcBMI();
        calcBSA();
    });
    calcBMI();
    calcBSA();

    $('.lastvisitpointer').each(function () {

        var vid = $(this).data('vid');
        var fieldname = $(this).data('fieldname');
        var fieldtitle = $(this).data('fieldtitle');
        var type = $(this).data('type');
        var ajaxstring = $(this).data('ajaxstring');
        var fieldtype = $(this).data('fieldtype');
        var datatype = $(this).data('datatype');

        if (fieldtype == 'checkbox') {
            ajaxstring = "&index[]=0&value[]=-unchecked-&index[]=1&value[]=-checked-";
        } else if (fieldtype == 'rating') {
            ajaxstring = "&index[]=0&value[]=-no-plus-&index[]=1&value[]=-one-plus-&index[]=2&value[]=-two-plus-&index[]=3&value[]=-three-plus-";
        }

        popoverfunc(vid, fieldname, fieldtitle, type, ajaxstring, datatype);
    });

    $(".selectpick").selectpicker({
        style: 'btn-select',
        iconBase: 'icon',
        tickIcon: 'md-check'
    });


    /*$('.helppointer').each(function () {
    var id = $(this).data('id');
    popoverhelp(id);
});*/


    /*$('.i18nlang').each(function () {
    var id = $(this).data('id');
    i18nlang(id, 'click');
});*/


    global_deligate.on("click", ".helppointer", function (event) {
        help_click(this);
    });

    global_deligate.on("click", ".i18nlang", function (event) {
        i18n_click(this);
    });

    $(document).on("mouseenter", ".dropdown-item .i18nlang", function (event) {
        i18n_click(this);
    });


    $('.user_note').each(function () {
        var vid = $(this).data('vid');
        var step = $(this).data('step');
        usernote(vid, step)
    });

    $('.patient_disease').each(function () {
        var nid = $(this).data('nid');
        var did = $(this).data('did');
        var dname = $(this).data('dname');
        $(this).webuiPopover({
            title: dname + ' Termination',
            width: 165,
            show: 10,
            style: 'danger',
            closeable: true,
            trigger: 'click',
            type: 'async',
            cache: false,
            url: '/patient/ajaxLoadPatientTermination?nid=' + nid + '&did=' + did + ts()
        });
    });

    $('.custom_popover').each(function () {
        $(this).webuiPopover({
            title: $(this).data('title'),
            content: $(this).data('content'),
            placement: $(this).data('placement'),
            width: $(this).data('width'),
            show: 10,
            style: $(this).data('style'),
            closeable: true,
            trigger: $(this).data('trigger')
        });
    });


    $('.user_note_list').each(function () {
        var vid = $(this).data('vid');
        usernotelist(vid);
    });
    $('.user_note_list_2').each(function () {
        var pid = $(this).data('pid');
        usernotelist2(pid);
    });
    $('.user_project_list').each(function () {
        var target = $(this).data('target');
        $(this).webuiPopover({
            title: 'Projects Included In',
            url: target,
            show: 10,
            style: 'success',
            closeable: true,
            trigger: 'hover'
        });
    });
    $('.load_html_visit').each(function () {
        var vid = $(this).data('vid');
        var hashid = $(this).data('hashid');
        var dname = $(this).data('dname');
        load_html_visit(vid, hashid, dname);
    });
    $('.visit_move').each(function () {
        var vid = $(this).data('vid');
        visitmove(vid);
    });
    $('.changevisitdate').each(function () {
        var vid = $(this).data('vid');
        changevisitdate(vid);
    });
    $('.changevisittype').each(function () {
        var vid = $(this).data('vid');
        changevisittype(vid);
    });
    $('.patient_move').each(function () {
        var pid = $(this).data('pid');
        patientmove(pid);
    });
    $('.toxicitypointer').each(function () {
        var id = $(this).data('id');
        var checkid = $(this).attr('id');
        popovertoxicity(id, checkid);
    });
    $('.drug_advers_effect').each(function () {
        var id = $(this).data('id');
        var elemID = $(this).attr('id');
        popovertoxicity_result(id, elemID);
    });

    $("input[type='checkbox'].toxicitypointer").change(function () {
        var checkid = $(this).attr('id');
        if ($(this).is(':checked')) {
            $('#' + checkid).webuiPopover('show');
        } else {
            $('#' + checkid).webuiPopover('hide');
        }
    });

    $('.formvalidate').formValidation({
        framework: "bootstrap4",
        icon: null,
        err: {
            clazz: 'invalid-feedback'
        },
        control: {
            // The CSS class for valid control
            valid: 'is-valid',

            // The CSS class for invalid control
            invalid: 'is-invalid'
        },
        row: {
            invalid: 'has-danger'
        }
    });
    changeInputWidth();

    /*$('body').scroll(function () {
        $(this).find('a').webuiPopover('destroy');
    });*/

    $('.is_Avail').each(function () {
        var cont = $(this).data('cont');
        var fieldname = $(this).find("input").first().attr('name');
        Is_Avail_Check(fieldname, cont);
        $('input[type=radio][name=' + fieldname + ']').change(function () {
            Is_Avail_Check(fieldname, cont);
            $(':input[type="submit"]').prop('disabled', false);
            $(':input[type="submit"]').removeClass('disabled');
        });
    });
    if (isTouchDevice() === false) {
        $('.user_info').each(function () {
            $(this).webuiPopover({
                title: '',
                width: 600,
                show: 10,
                style: 'user_info',
                closeable: false,
                trigger: 'hover',
                type: 'async',
                cache: true,
                url: '/user/ajaxGetUserData?uid=' + $(this).data('uid') + ts()
            });
        });

        $('.patient_info').each(function () {
            $(this).webuiPopover({
                title: '',
                width: 700,
                show: 10,
                style: 'patient_info',
                closeable: false,
                trigger: 'hover',
                type: 'async',
                cache: true,
                url: '/patient/ajaxGetPatientData?pid=' + $(this).data('pid') + ts()
            });
        });

        $('.center_info').each(function () {
            $(this).webuiPopover({
                title: '',
                width: 600,
                show: 10,
                style: 'primary',
                closeable: false,
                trigger: 'hover',
                type: 'async',
                cache: true,
                url: '/center/ajaxGetCenterData?cid=' + $(this).data('cid') + ts()
            });
        });
    }

    druginfoclass();
    drugextrainfoclass();

    global_deligate.on('click', '.newactionbtn', function (e) {

        var action = $(this).data('action');
        var id = $(this).data('id');


        //var set = $(this).data('set');
        var type = $(this).data('type');
        var url = $(this).data('url');
        var set = '#' + $(this).closest('table').attr('id');
        if (set == '#undefined')
            set = $(this).data('set');

        var datatable = $(this).data('datatable');
        var refresh_id = $(this).data('refresh_id');

        if (id == 'hash') {
            id = $(this).closest('form').data('hash');
            refresh_id = refresh_id + '|' + id;
        }

        if (type == '1') {
            var selected = $(set + ' tbody tr .selectable-item:checked');
            if (selected.length > 0) {
                var idis = '';
                for (var i = 0; i < selected.length; i = i + 1) {
                    idis += $(selected[i]).attr("value") + ',';
                }
            }
            id = idis;
        }


        if (action == 'delete') {
            if (global_lang == 'fa') {
                var title = 'حذف';
                var text = 'آیا از حذف کردن مورد/موارد انتخابی مطمئن هستید؟';
                var was_deleted_title = 'حذف';
                var was_deleted_text = "مورد/موارد انتخابی حذف شدند.";
                var problem_deleted_text = "حذف موارد انتخابی با مشکل مواجه شد!";
                var delete_title = 'بله، حذف کنید';
                var cancel_title = 'لغو';
                var ok_title = 'تایید';
            } else {
                var title = 'Delete!';
                var text = 'Are you sure that you want to permanently delete the selected item(s)?';
                var was_deleted_title = 'Deletion';
                var was_deleted_text = "The item has been deleted.";
                var problem_deleted_text = "A problem in deleting the item(s)";
                var delete_title = 'Yes, delete it!';
                var cancel_title = 'Cancel';
                var ok_title = 'OK';
            }

            swal({
                    title: title,
                    text: text,
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonClass: "btn-danger ml-5 mr-5",
                    confirmButtonText: delete_title,
                    cancelButtonText: cancel_title,
                    cancelButtonClass: "ml-5 mr-5",
                    closeOnConfirm: false,
                    showLoaderOnConfirm: true
                },
                function () {
                    if (url != 'local') {
                        $.ajax({
                            url: url + '?id=' + id + '&action=' + action + '&type=' + type + ts(),
                            context: document.body
                        }).done(function (msg) {
                            msg = msg.split('|');
                            if (datatable != 'no') {
                                $(set).dataTable().fnDraw(false);
                                $(set + ' .checkboxes.tablefooter').hide();
                                $(set + ' .checkboxes.tablefooter').hide();
                                $(set + ' .selectable-all').prop("checked", false);
                            }


                            if (msg[0] != 'nok') {
                                if (msg.length > 1)
                                    was_deleted_text = msg[1];
                                swal({
                                    title: was_deleted_title,
                                    text: was_deleted_text,
                                    type: "success",
                                    confirmButtonText: ok_title
                                });

                                if (typeof (other_refresh) === typeof (Function)) {
                                    other_refresh(refresh_id);
                                } else {
                                    console.log(refresh_id);
                                    $(refresh_id).hide('slow').remove();
                                    $(refresh_id + '-c').show('slow');
                                }

                                setTimeout(function () {
                                    swal.close();
                                }, 1000);
                            } else {
                                if (msg.length > 1)
                                    problem_deleted_text = msg[1];
                                swal({
                                    title: was_deleted_title,
                                    text: problem_deleted_text,
                                    type: "error",
                                    confirmButtonText: ok_title
                                });
                            }
                        });
                    } else {
                        if (typeof (other_refresh) === typeof (Function)) {
                            other_refresh(refresh_id);
                        } else {
                            $(refresh_id).hide('slow').remove();
                            $(refresh_id + '-c').show('slow');
                        }

                        swal({
                            title: was_deleted_title,
                            text: was_deleted_text,
                            type: "success",
                            confirmButtonText: ok_title
                        });
                        setTimeout(function () {
                            swal.close();
                        }, 1000);
                    }
                });
        } else {
            $.ajax({
                url: url + '?id=' + id + '&action=' + action + ts(),
                context: document.body
            }).done(function () {
                if (datatable != 'no') {
                    $(set).dataTable().fnDraw(false);
                    $(set + ' .checkboxes.tablefooter').hide();
                    $(set + ' .checkboxes.tablefooter').hide();
                    $(set + ' .selectable-all').prop("checked", false);
                }
                if (typeof (other_refresh) === typeof (Function)) {
                    other_refresh(refresh_id);
                } else {
                    $(refresh_id).hide('slow').remove();
                    $(refresh_id + '-c').show('slow');
                }
            });
        }
    });
});

global_deligate.on("click", ".view_integrate", function (event) {
    let jsonreq = $(this).closest('td').find('.request-body-json');
    if ($(this).data('init') == '0') {
        $(this).data('init', 1);
        $(jsonreq).html(jsonSyntaxHighlight(JSON.stringify(JSON.parse($(jsonreq).html()), undefined, 4)));
    }
    $(jsonreq).toggle();
});


global_deligate.on("click", ".btn-more", function (event) {
    let target = $(this).data('target');
    $('.' + target).toggle();
});


function patient_disease_termination(nid, did, type) {
    $.ajax({
        type: "POST",
        url: '/patient/ajaxPatientTermination' + ts('?'),
        data: "nid=" + nid + "&did=" + did + '&type=' + type,
        success: function (msg) {
            if (msg == 'okadd') {
                $('#badge_' + nid + '_' + did).addClass('bg-grey-400-force');
                $('#terminate_' + nid + '_' + did).hide();
                $('#determinate_' + nid + '_' + did).show();
            } else if (msg == 'okremove') {
                $('#badge_' + nid + '_' + did).removeClass('bg-grey-400-force');
                $('#terminate_' + nid + '_' + did).show();
                $('#determinate_' + nid + '_' + did).hide();
            }
        }
    });
}


function afterTableRefresh() {
    if (isTouchDevice() === false) {
        $('.user_info').each(function () {
            $(this).webuiPopover({
                title: '',
                width: 600,
                show: 10,
                style: 'primary',
                closeable: false,
                trigger: 'hover',
                type: 'async',
                cache: true,
                url: '/user/ajaxGetUserData?uid=' + $(this).data('uid') + ts()
            });
        });

        $('.patient_info').each(function () {
            $(this).webuiPopover({
                title: '',
                width: 700,
                show: 10,
                style: 'patient_info',
                closeable: false,
                trigger: 'hover',
                type: 'async',
                cache: true,
                url: '/patient/ajaxGetPatientData?pid=' + $(this).data('pid') + ts()
            });
        });

        $('.center_info').each(function () {
            $(this).webuiPopover({
                title: '',
                width: 600,
                show: 10,
                style: 'primary',
                closeable: false,
                trigger: 'hover',
                type: 'async',
                cache: true,
                url: '/center/ajaxGetCenterData?cid=' + $(this).data('cid') + ts()
            });
        });
        $('.consumable_info').each(function () {
            $(this).webuiPopover({
                title: '',
                width: 600,
                show: 10,
                style: 'primary',
                closeable: false,
                trigger: 'hover',
                type: 'async',
                cache: true,
                url: '/consumable/ajaxGetConsumableData?id=' + $(this).data('conid') + ts()
            });
        });
        $('.pop_hover').tooltip();
    }
    $('.user_note_list').each(function () {
        var vid = $(this).data('vid');
        usernotelist(vid);
    });
    $('.user_note_list_2').each(function () {
        var pid = $(this).data('pid');
        usernotelist2(pid);
    });
    $('.user_project_list').each(function () {
        var target = $(this).data('target');
        $(this).webuiPopover({
            title: 'Projects Included In',
            url: target,
            show: 10,
            style: 'success',
            closeable: true,
            trigger: 'hover'
        });
    });
    $('.load_html_visit').each(function () {
        var vid = $(this).data('vid');
        var hashid = $(this).data('hashid');
        var dname = $(this).data('dname');
        load_html_visit(vid, hashid, '');
    });
    $('.visit_move').each(function () {
        var vid = $(this).data('vid');
        visitmove(vid);
    });
    $('.changevisitdate').each(function () {
        var vid = $(this).data('vid');
        changevisitdate(vid);
    });
    $('.changevisittype').each(function () {
        var vid = $(this).data('vid');
        changevisittype(vid);
    });
    $('.patient_move').each(function () {
        var pid = $(this).data('pid');
        patientmove(pid);
    });
    $('.proposal_info').each(function () {
        $(this).webuiPopover({
            title: 'Proposal Info',
            width: 800,
            show: 10,
            style: 'primary',
            closeable: true,
            trigger: 'click',
            type: 'async',
            cache: false,
            url: '/admin/ajaxViewProposal?id=' + $(this).data('id') + ts()
        });
    });

    $('.toolbarbotton').each(function () {
        $(this).toolbar({
            content: $(this).data('toolbar'),
            style: 'dark',
            position: 'left',
        });
    });

    $(".permission_btn").click(function () {
        permission_click(this);
    });

    sms_conv();

}

function addToInclude(pid, project_id, refresh = 1) {
    $.ajax({
        type: "POST",
        url: "/project/ajaxAddToProject" + ts('?'),
        data: "pid=" + pid + "&project_id=" + project_id,
        success: function (msg) {
            if (msg == 'ok') {
                if (refresh == 1) {
                    $('#included').DataTable().ajax.reload(null, false);
                    $('#notincluded').DataTable().ajax.reload(null, false);
                }
            } else {
                toastr.error("Operation was failed!");
            }
        }
    });
}

function deleteFromInclude(pid, project_id, refresh = 1) {
    $.ajax({
        type: "POST",
        url: "/project/ajaxRemoveFromProject" + ts('?'),
        data: "pid=" + pid + "&project_id=" + project_id,
        success: function (msg) {
            if (msg == 'ok') {
                if (refresh == 1) {
                    $('#included').DataTable().ajax.reload(null, false);
                    $('#notincluded').DataTable().ajax.reload(null, false);
                }
            } else {
                toastr.error("Operation was failed!");
            }
        }
    });
}


function isTouchDevice() {
    return true == ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
}

function check_ivis_date(id) {
    var parent = $('#' + id).closest("div.form-material");

    parent.find('.invis_datetype').each(function () {
        var val = $(this).val();
        //console.log(val);

        var init = 0;
        if (val != '')
            init = 1;

        //console.log(id);

        $(this).persianDatepicker({
            maxDate: (new Date()).getTime(),
            initialValue: init,
            format: "YYYY/MM/DD",
            viewMode: "year",
            persianDigit: false,
            autoClose: true,
            todayButton: {
                text: {
                    fa: 'Today',
                    en: 'Today'
                }
            },
            calendar: {
                persian: {
                    'locale': global_lang,
                    'showHint': false
                }
            },
            onSelect: function () {
                checkVisitDate(this['model']['inputElement'].id);
                if (typeof onPersianDatePicker === 'function')
                    onPersianDatePicker(this);
                if (typeof onPersianDatePicker2 === 'function')
                    onPersianDatePicker2(this);
            }
        });
    });
}

function hide_element_checkbox() {
    $('.hide-element-checkbox').each(function () {

        var elemet = $(this).data('whohidden');
        var res = elemet.split(",");
        for (i = 0; i < res.length; i++) {
            if ($(this).is(":checked")) {
                if ($('#' + res[i]).data("showtype") == 'itself')
                    $('#' + res[i]).show();
                else
                    $('#' + res[i]).closest("div.form-material").show();
                check_ivis_date(res[i]);
            } else {
                if ($('#' + res[i]).data("showtype") == 'itself')
                    $('#' + res[i]).hide();
                else
                    $('#' + res[i]).closest("div.form-material").hide();
            }
        }
    });
    $('.hide-element-checkbox').change(function () {
        var elemet = $(this).data('whohidden');
        var res = elemet.split(",");
        for (i = 0; i < res.length; i++) {
            if ($(this).is(":checked")) {
                if ($('#' + res[i]).data("showtype") == 'itself')
                    $('#' + res[i]).show();
                else
                    $('#' + res[i]).closest("div.form-material").show();
                if (i == 0)
                    $('#' + res[i]).focus();
                check_ivis_date(res[i]);
            } else {
                if ($('#' + res[i]).data("showtype") == 'itself')
                    $('#' + res[i]).hide();
                else
                    $('#' + res[i]).closest("div.form-material").hide();
            }
        }
        changeInputWidth();
    });
}

hide_element_checkbox();


function hide_element_radiobox() {
    $('.hide-element-radiobox').each(function () {
        var elemet = $(this).data('whohidden');
        var res = elemet.split(",");
        var name = $(this).attr('name');
        var val = $('input[name=' + name + ']:checked').val();
        for (i = 0; i < res.length; i++) {
            if (val != '' && val != null && val != '0' && val != 'NULL') {

                if ($('#' + res[i]).data("showtype") == 'itself')
                    $('#' + res[i]).show();
                else
                    $('#' + res[i]).closest("div.form-material").show();
                check_ivis_date(res[i]);
            } else {
                if ($('#' + res[i]).data("showtype") == 'itself')
                    $('#' + res[i]).hide();
                else
                    $('#' + res[i]).closest("div.form-material").hide();
            }
        }
    });
    $('.hide-element-radiobox').change(function () {
        var elemet = $(this).data('whohidden');
        var res = elemet.split(",");
        var name = $(this).attr('name');
        var val = $('input[name=' + name + ']:checked').val();
        for (i = 0; i < res.length; i++) {
            if (val != '' && val != null && val != '0' && val != 'NULL') {
                if ($('#' + res[i]).data("showtype") == 'itself')
                    $('#' + res[i]).show();
                else
                    $('#' + res[i]).closest("div.form-material").show();
                check_ivis_date(res[i]);
            } else {
                if ($('#' + res[i]).data("showtype") == 'itself')
                    $('#' + res[i]).hide();
                else
                    $('#' + res[i]).closest("div.form-material").hide();
            }
        }
        changeInputWidth();
    });
}

hide_element_radiobox();


function checkVisitDate(id) {
    //console.log(id);
    if ($('#' + id).parents('.isvisit').length == 0)
        return;

    var val = $('#' + id).val();
    var values = val.split("/");
    if (values.length === 3) {
        values[0] = parseInt(values[0]);
        values[1] = parseInt(values[1]);
        values[2] = parseInt(values[2]);

        persianDate.toCalendar('persian');
        var date = new persianDate(values);
        if (values[0] >= 1600) {
            persianDate.toCalendar('gregorian');
            date = new persianDate(values);
        }

        //console.log(date);

        var currentVisitValues = $('#visitDateCurrent').text().split("/");
        currentVisitValues[0] = parseInt(currentVisitValues[0]);
        currentVisitValues[1] = parseInt(currentVisitValues[1]);
        currentVisitValues[2] = parseInt(currentVisitValues[2]);

        persianDate.toCalendar('persian');
        var currentVisitdate = new persianDate(currentVisitValues);
        if (currentVisitValues[0] >= 1600) {
            persianDate.toCalendar('gregorian');
            currentVisitdate = new persianDate(currentVisitValues);
        }

        //console.log(currentVisitdate);
        $('.datetype, .datetypen').webuiPopover('destroy');

        if (date.State.unixtime > currentVisitdate.State.unixtime) {
            var diffDays = date.diff(currentVisitdate, 'days');
            //console.log(diffDays);
            $('#' + id).webuiPopover({
                title: 'Date Alert',
                content: 'Visit Date is ' + diffDays + ' day(s) older than the date you entered! Be careful!' + "\n<br/>" + 'Visit Date: ' + $('#visitDateCurrent').text(),
                style: 'warning',
                trigger: 'manual',
                closeable: true,
            });
            $('#' + id).webuiPopover('show');

        }
    }
}

function encodeHTML(str) {
    return str.replace(/([\u00A0-\u9999<>&])(.|$)/g, function (full, char, next) {
        if (char !== '&' || next !== '#') {
            if (/[\u00A0-\u9999<>&]/.test(next))
                next = '&#' + next.charCodeAt(0) + ';';

            return '&#' + char.charCodeAt(0) + ';' + next;
        }

        return full;
    });
}

function decodeHTML(str) {
    return str.replace(/&#([0-9]+);/g, function (full, int) {
        return String.fromCharCode(parseInt(int));
    });
}

function jsonSyntaxHighlight(json) {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}

function updateDate() {
    $('.freedatetype').persianDatepicker({
        initialValue: 1,
        format: "YYYY/MM/DD",
        viewMode: "year",
        persianDigit: false,
        autoClose: true,
        initialValueType: 'gregorian',
        todayButton: {
            text: {
                fa: 'Today',
                en: 'Today'
            }
        },
        calendar: {
            persian: {
                'locale': global_lang,
                'showHint': false
            }
        },
        onSelect: function () {
            if (typeof onPersianDatePicker === 'function')
                onPersianDatePicker(this);
            if (typeof onPersianDatePicker2 === 'function')
                onPersianDatePicker2(this);
        }
    });
    $('.freedatetypen').persianDatepicker({
        initialValue: 0,
        format: "YYYY/MM/DD",
        viewMode: "year",
        persianDigit: false,
        autoClose: true,
        initialValueType: 'gregorian',
        todayButton: {
            text: {
                fa: 'Today',
                en: 'Today'
            }
        },
        calendar: {
            persian: {
                'locale': global_lang,
                'showHint': false
            }
        },
        onSelect: function () {
            if (typeof onPersianDatePicker === 'function')
                onPersianDatePicker(this);
            if (typeof onPersianDatePicker2 === 'function')
                onPersianDatePicker2(this);
        }
    });


    $('.isvisit .datetypen,.isvisit .datetype,.isvisit .invis_datetypen,.isvisit .invis_datetype').each(function () {
        var elem = $(this);

        // Save current value of element
        elem.data('oldVal', elem.val());

        // Look for changes in the value
        elem.bind("propertychange change click keyup input paste", function (event) {
            // If value has changed...
            if (elem.data('oldVal') != elem.val()) {
                // Updated stored value
                elem.data('oldVal', elem.val());

                checkVisitDate(elem[0].id);

                // Do action
            }
        });
    });


    $('.datetype').persianDatepicker({
        maxDate: (new Date()).getTime(),
        initialValue: 1,
        format: "YYYY/MM/DD",
        viewMode: "year",
        persianDigit: false,
        autoClose: true,
        todayButton: {
            text: {
                fa: 'Today',
                en: 'Today'
            }
        },
        calendar: {
            persian: {
                'locale': global_lang,
                'showHint': false
            }
        },
        onSelect: function () {
            checkVisitDate(this['model']['inputElement'].id);
            if (typeof onPersianDatePicker === 'function')
                onPersianDatePicker(this);
            if (typeof onPersianDatePicker2 === 'function')
                onPersianDatePicker2(this);
        }
    });
    $('.datetypen').persianDatepicker({
        maxDate: (new Date()).getTime(),
        initialValue: 0,
        format: "YYYY/MM/DD",
        viewMode: "year",
        persianDigit: false,
        autoClose: true,
        todayButton: {
            text: {
                fa: 'Today',
                en: 'Today'
            }
        },
        calendar: {
            persian: {
                'locale': global_lang,
                'showHint': false
            }
        },
        onSelect: function () {
            checkVisitDate(this['model']['inputElement'].id);
            if (typeof onPersianDatePicker === 'function')
                onPersianDatePicker(this);
            if (typeof onPersianDatePicker2 === 'function')
                onPersianDatePicker2(this);
        }
    });
    $('.datetypemin').persianDatepicker({
        minDate: (new Date()).getTime(),
        initialValue: 1,
        format: "YYYY/MM/DD",
        viewMode: "year",
        persianDigit: false,
        autoClose: true,
        todayButton: {
            text: {
                fa: 'Today',
                en: 'Today'
            }
        },
        calendar: {
            persian: {
                'locale': global_lang,
                'showHint': false
            }
        },
        onSelect: function () {
            if (typeof onPersianDatePicker === 'function')
                onPersianDatePicker(this);
            if (typeof onPersianDatePicker2 === 'function')
                onPersianDatePicker2(this);
        }
    });
    $('.datetypenmin').persianDatepicker({
        minDate: (new Date()).getTime(),
        initialValue: 0,
        format: "YYYY/MM/DD",
        viewMode: "year",
        persianDigit: false,
        autoClose: true,
        todayButton: {
            text: {
                fa: 'Today',
                en: 'Today'
            }
        },
        calendar: {
            persian: {
                'locale': global_lang,
                'showHint': false
            }
        },
        onSelect: function () {
            var id = $(this).model.input.elem.id;
            if (typeof onPersianDatePicker === 'function')
                onPersianDatePicker(this);
            if (typeof onPersianDatePicker2 === 'function')
                onPersianDatePicker2(this);
        }
    });
    $('.invis_datetype').formatter({
        'pattern': '{{9999}}/{{99}}/{{99}}',
        'persistent': false
    });
    $('.datetype').formatter({
        'pattern': '{{9999}}/{{99}}/{{99}}',
        'persistent': false
    });
    $('.datetypen').formatter({
        'pattern': '{{9999}}/{{99}}/{{99}}',
        'persistent': false
    });
    $('.datetypenmin').formatter({
        'pattern': '{{9999}}/{{99}}/{{99}}',
        'persistent': false
    });
}

updateDate();

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}

function setOnchange(table, type, child) {
    /*$("#" + table + " tbody tr td:nth-child(" + child + ") input[id*='-" + type + "']").each(function () {
    $(this).trigger('click').prop('checked', true);
});*/

    $("#" + table + " tbody tr td:nth-child(" + child + ") input[id*='-" + type + "']").trigger('click').prop('checked', true);
}

$(document).ready(function () {
    $('input[type=radio][class=setallradio]').change(function () {
        var tableID = $(this).data('tableid');
        var type = $('input[class=setallradio]:checked', "#" + tableID).val();
        var child = $(this).data('child') + '';
        child.split(',').forEach(function (item) {
            setOnchange(tableID, type, item);
        });
    });

    $('.dataTables_length select').selectpicker({
        style: 'btn-select',
        width: '80px'
    });

    $("#diseases_id").change(function () {
        check_diseases_id();
    });
});


function check_diseases_id() {
    $.ajax({
        url: '/visit/ajaxgetDiseaseTypes' + ts('?'),
        type: 'POST',
        data: 'did=' + $("#diseases_id").val() + '&national_code=' + $('#national_code').val()
    }).done(function (htmlret) {
        if (htmlret != 'nok') {
            $('#disease_type_div').show();
            $('#disease_id_div').removeClass('col-md-4');
            $('#disease_id_div').addClass('col-md-2');
            $('#disease_type').html(htmlret);

            $('#disease_type').selectpicker({
                style: 'btn-select',
                iconBase: 'icon',
                tickIcon: 'md-check',
                liveSearch: true
            });
        } else {
            $('#disease_type_div').hide();
            $('#disease_id_div').removeClass('col-md-2');
            $('#disease_id_div').addClass('col-md-4');
            $('#disease_type').selectpicker('destroy');
        }
    });
}


$("#printreport").on("click", function () {
    $('.buttons-print').click();
});


var down = false;
$(document).mousedown(function () {
    down = true;
}).mouseup(function () {
    down = false;
});


function calcRangeLabData(id) {
    //var id = $(this).attr("id");
    var val = $('#' + id).val();
    var rangeId = '#' + id + '_Range';
    var nullID = '#' + id + '_Result-NULL';
    var lowID = '#' + id + '_Result-1';
    var normalID = '#' + id + '_Result-2';
    var highID = '#' + id + '_Result-3';
    var highSeverity = '#' + id + '_High_Result_Severity-div';

    var nullposnegID = '#' + id + '_PosNeg-NULL';
    var neglID = '#' + id + '_PosNeg-0';
    var poslID = '#' + id + '_PosNeg-1';

    if (val === "" || val == null || 0 === val.length) {
        $(nullID).attr('checked', true).trigger('click');
        $(nullposnegID).attr('checked', true).trigger('click');
        $(nullID).closest("div.form-material").hide();
        $(nullposnegID).closest("div.form-material").hide();
        $(highSeverity).closest("div.form-material").hide();
    } else {
        $(nullID).closest("div.form-material").show();
        $(nullposnegID).closest("div.form-material").show();

        var rangeVal = $(rangeId).val();
        var rangeVal = rangeVal.replace("_", "-");
        var rangeSplit = rangeVal.split("-");
        val = eval(val); // TODO: Why `eval` has been used?

        //console.log(rangeSplit);

        if (rangeSplit.length == 2) {
            var lowRange = parseFloat(eval(rangeSplit[0]));
            var highrange = parseFloat(eval(rangeSplit[1]));
            $(highSeverity).closest("div.form-material").hide();
            if (val >= lowRange && val <= highrange) {
                $(normalID).attr('checked', true).trigger('click');
            } else if (val > highrange) {
                $(highID).attr('checked', true).trigger('click');
                $(highSeverity).closest("div.form-material").show();
                $(highSeverity).raty({
                    starType: 'i',
                    scoreName: id + '_High_Result_Severity',
                    numberMax: 3,
                    score: 0,
                    cancel: true,
                    starOff: 'icon md-plus grey-300',
                    starOn: 'icon md-plus red-800',
                    cancelOff: 'icon md-close-circle-o grey-400',
                    cancelOn: 'icon md-close-circle-o yellow-800'
                });
            } else if (val < lowRange) {
                $(lowID).attr('checked', true).trigger('click');
            }
        } else {
            var rangeVal = rangeVal.replace("=", "");
            rangeSplit = rangeVal.split("<");
            //console.log(rangeSplit);
            if (rangeSplit.length == 2) {
                var left = parseFloat(eval(rangeSplit[0]));
                var right = parseFloat(eval(rangeSplit[1]));
                if (rangeSplit[0] == '') {
                    if (val <= right) {
                        //console.log(neglID);
                        $(neglID).attr('checked', true).trigger('click');
                        $(normalID).attr('checked', true).trigger('click');
                    } else {
                        //console.log(poslID);
                        $(poslID).attr('checked', true).trigger('click');
                        $(highID).attr('checked', true).trigger('click');
                        $(highSeverity).closest("div.form-material").show();
                        $(highSeverity).raty({
                            starType: 'i',
                            scoreName: id + '_High_Result_Severity',
                            numberMax: 3,
                            score: 0,
                            cancel: true,
                            starOff: 'icon md-plus grey-300',
                            starOn: 'icon md-plus red-800',
                            cancelOff: 'icon md-close-circle-o grey-400',
                            cancelOn: 'icon md-close-circle-o yellow-800'
                        });
                    }
                }
            }
            rangeSplit = rangeVal.split(">");
            if (rangeSplit.length == 2) {
                var left = parseFloat(eval(rangeSplit[0]));
                var right = parseFloat(eval(rangeSplit[1]));
                if (rangeSplit[0] == '') {
                    if (val >= right) {
                        //console.log(neglID);
                        $(neglID).attr('checked', true).trigger('click');
                        $(normalID).attr('checked', true).trigger('click');
                    } else {
                        //console.log(poslID);
                        $(poslID).attr('checked', true).trigger('click');
                        $(highID).attr('checked', true).trigger('click');
                        $(highSeverity).closest("div.form-material").show();
                        $(highSeverity).raty({
                            starType: 'i',
                            scoreName: id + '_High_Result_Severity',
                            numberMax: 3,
                            score: 0,
                            cancel: true,
                            starOff: 'icon md-plus grey-300',
                            starOn: 'icon md-plus red-800',
                            cancelOff: 'icon md-close-circle-o grey-400',
                            cancelOn: 'icon md-close-circle-o yellow-800'
                        });
                    }
                }
            }
        }
    }
}

function evil(fn) {
    return new Function('return ' + fn)();
}


var cal = ['jalali', 'jalali', 'jalali', 'jalali', 'jalali', 'jalali', 'jalali', 'jalali', 'jalali', 'jalali'];

function initializeCals(caltype) {
    for (var i = 0; i < cal.length; i++) {
        cal[i] = caltype;
    }
}

function toggleCal(index) {
    if (cal[index] == 'jalali') {
        changeCal('gregorian');
        cal[index] = 'gregorian';
    } else {
        changeCal('jalali');
        cal[index] = 'jalali';
    }
}

function changeCal(caltype) {
    if (caltype == 'jalali') {
        Highcharts.setOptions({
            lang: {
                months: ['Farvardin', 'Ordibehesht', 'Khordad', 'Tir', 'Mordad', 'Shahrivar', 'Mehr', 'Aban', 'Azar', 'Dey', 'Bahman', 'Esfand'],
                shortMonths: ['Far', 'Ord', 'Khor', 'Tir', 'Mord', 'Shah', 'Mehr', 'Aban', 'Azar', 'Dey', 'Bah', 'Esf'],
            },
            time: {
                Date: JDate
            },
            global: {
                useUTC: false
            }
        });
    } else {
        Highcharts.setOptions({
            lang: {
                months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
            },
            time: {
                Date: Date
            },
            global: {
                useUTC: false
            }
        });
    }
}

var showhide = ['s', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's', 's'];

function toggleall(chartName, index) {
    chart = $('#' + chartName).highcharts();
    for (i = 0; i < chart.series.length; i++) {
        if (showhide[index] == 's') {
            chart.series[i].hide();
        } else {
            chart.series[i].show();
        }
    }

    if (showhide[index] == 's') {
        showhide[index] = 'h';
    } else {
        showhide[index] = 's';
    }
}


function updateCity(pid, cid, cityid, type = 1) {
    $.ajax({
        url: '/site/ajaxGetCityData' + ts('?'),
        type: 'GET',
        data: 'cityid=' + cityid + '&pid=' + pid + '&cid=' + cid + '&type=' + type
    }).done(function (htmlret) {
        $("#" + cityid + "_cont").html(htmlret);
        $("#" + cityid).selectpicker({
            style: 'btn-select',
            iconBase: 'icon',
            tickIcon: 'md-check',
            showTick: true,
            liveSearch: true
        });
    });
}


$(document).on('click.site.panel', '[data-toggle="panel-fullscreen"]', function (e) {
    e.preventDefault();
    var api = $(this).closest('.panel');

    if (api.hasClass("is-fullscreen")) {
        api.removeClass('is-fullscreen');
    } else {
        api.addClass('is-fullscreen');
    }
});

function ajaxDeletePatientPhoto(patientid) {
    $.ajax({
        type: "POST",
        url: "/patient/ajaxDeletePhoto" + ts('?'),
        data: "patientid=" + patientid,
        success: function (msg) {
            if (msg == 'ok') {
                // window.location = window.location.href;
            } else {
                //alert('Cannot remove the photo!');
            }
        }
    });
}

function set_username(userid) {
    $('#userid_resetpass').val(userid);
}

/*
var rtlChar = /[\u0590-\u083F]|[\u08A0-\u08FF]|[\uFB1D-\uFDFF]|[\uFE70-\uFEFF]/mg;

function checkRTL() {
$('.checkRTL').keyup(function () {
    var isRTL = this.value.match(rtlChar);
    if (isRTL !== null) {
        this.style.direction = 'rtl';
    }
    else {
        this.style.direction = 'ltr';
    }
});

$('.checkRTL').each(function () {
    var isRTL = this.value.match(rtlChar);
    if (isRTL !== null) {
        this.style.direction = 'rtl';
    }
    else {
        this.style.direction = 'ltr';
    }
});
}

$(document).ready(function () {
checkRTL();
});*/

$('.note-editable').on('paste', function () {
    var element = this;
    var id = $(this).attr('id');
    setTimeout(function () {
        var text = $(element).val();
        $(this).find('div').children().contents().unwrap().wrap('<p/>');
        $(this).children().each(function () {
            this.removeAttribute('dir');
        });
        //console.log($(element).val());
    }, 100);
});


function formatRepoUser(repo) {
    if (repo.loading) {
        return repo.text;
    }
    if (repo.type == 'cat')
        return repo.text;

    var $container = $(
        "<div class='select2-result-repository clearfix'>" +
        "<div class='select2-result-repository__avatar'><img src='" + repo.avatar_url + "' /></div>" +
        "<div class='select2-result-repository__meta'>" +
        "<div class='select2-result-repository__title checkRTL'></div>" +
        "<div class='select2-result-repository__description checkRTL' style='font-size: 11px;'></div>" +
        "<div class='select2-result-repository__statistics'>" +
        "<div class='select2-result-repository__forks'><i class='fa fa-globe'></i> </div>" +
        "</div>" +
        "</div>" +
        "</div>"
    );

    $container.find(".select2-result-repository__title").text(repo.text);

    if (repo.description != '' && typeof repo.description !== 'undefined')
        $container.find(".select2-result-repository__description").text((global_lang == 'en' ? 'Address: ' : 'آدرس: ') + repo.description);
    else
        $container.find(".select2-result-repository__description").hide();

    if (repo.center != '' && typeof repo.center !== 'undefined')
        $container.find(".select2-result-repository__forks").append('<b>' + (global_lang == 'en' ? 'Center:' : 'مرکز:') + '</b> ' + repo.center);
    else
        $container.find(".select2-result-repository__forks").hide();


    return $container;
}

function formatRepoCenter(repo) {
    if (repo.loading) {
        return repo.text;
    }
    if (repo.type == 'cat')
        return repo.text;

    var $container = $(
        "<div class='select2-result-repository clearfix'>" +
        "<div class='select2-result-repository__avatar'><img src='" + repo.avatar_url + "' /></div>" +
        "<div class='select2-result-repository__meta'>" +
        "<div class='select2-result-repository__title checkRTL'></div>" +
        "<div class='select2-result-repository__description checkRTL' style='font-size: 11px;'></div>" +
        "<div class='select2-result-repository__statistics'>" +
        "<div class='select2-result-repository__forks'><i class='fa fa-info-outline'></i> </div>" +
        "</div>" +
        "</div>" +
        "</div>"
    );

    $container.find(".select2-result-repository__title").text(repo.text);

    if (repo.description != '' && typeof repo.description !== 'undefined')
        $container.find(".select2-result-repository__description").text((global_lang == 'en' ? 'Address: ' : 'آدرس: ') + repo.description);
    else
        $container.find(".select2-result-repository__description").hide();

    if (repo.info != '' && typeof repo.info !== 'undefined')
        $container.find(".select2-result-repository__forks").append(repo.info);
    else
        $container.find(".select2-result-repository__forks").hide();


    return $container;
}

function formatRepoWithoutAvatar(repo) {
    if (repo.loading) {
        return repo.text;
    }
    if (repo.type == 'cat')
        return repo.text;

    var $container = $(
        "<div class='select2-result-repository clearfix'>" +
        "<div>" +
        "<div class='select2-result-repository__title checkRTL'></div>" +
        "<div class='select2-result-repository__description checkRTL' style='font-size: 11px;'></div>" +
        "<div class='select2-result-repository__statistics'>" +
        "<div class='select2-result-repository__forks checkRTL'><i class='fa fa-info-outline'></i> </div>" +
        "</div>" +
        "</div>" +
        "</div>"
    );

    $container.find(".select2-result-repository__title").text(repo.text);

    if (repo.description != '' && typeof repo.description !== 'undefined')
        $container.find(".select2-result-repository__description").text(repo.description);
    else
        $container.find(".select2-result-repository__description").hide();

    if (repo.info != '' && typeof repo.info !== 'undefined')
        $container.find(".select2-result-repository__forks").append(repo.info);
    else
        $container.find(".select2-result-repository__forks").hide();


    return $container;
}

function formatRepoSelection(repo) {
    return repo.text;
}

$(document).ready(function () {
    auto_uid();
    auto_cid();
    auto_loinc();
    auto_labdata();
    auto_service();
});

function auto_uid() {
    $(".auto_uid").each(function () {
        let lang = $("body").data('lang');
        let parent = $(this).closest('div');
        let dir = $("body").attr("dir");
        $(this).select2({
            dir: dir,
            ajax: {
                url: '/user/ajaxGetUsersJson' + ts('?'),
                dataType: 'json',
                delay: 250,
                type: 'GET',
                data: function (params) {
                    return {
                        term: params.term,
                        cid: $(this).data('cid')
                    };
                },
                processResults: function (data) {
                    return {
                        results: data.results
                    };
                },
                cache: true
            },
            minimumInputLength: 2,
            placeholder: (lang == 'en' ? 'Search for a user' : 'جستجوی کاربر'),
            dropdownParent: parent,
            dropdownAutoWidth: true,
            templateResult: formatRepoUser,
            templateSelection: formatRepoSelection
        });
    });
}

function set_ajax_live_cid() {

    var select1 = $(".ajaxselectlive").select2({
        ajax: {
            url: '/center/ajaxGetCentersJson' + ts('?'),
            dataType: 'json',
            delay: 250,
            type: 'GET',
            dir: $("body").attr("dir"),
            data: function (params) {
                return {
                    term: params.term
                };
            },
            processResults: function (data) {
                return {
                    results: data.results
                };
            },
            cache: true
        },
        minimumInputLength: 0,
        placeholder: 'Search for a center',
        // dropdownAutoWidth: true,
        templateResult: formatRepoCenter,
        templateSelection: formatRepoSelection
    });
}

function auto_cid() {
    let modalParent = $(".auto_cid").closest(".modal");
    //console.log({modalParent});

    $(".auto_cid").each(function () {
        let lang = $("body").data('lang');
        let parent = $(this).closest('div');
        let dir = $("body").attr("dir");
        $(this).select2({
            dir: dir,
            ajax: {
                url: '/center/ajaxGetCentersJson' + ts('?'),
                dataType: 'json',
                delay: 250,
                type: 'GET',
                data: function (params) {
                    return {
                        term: params.term
                    };
                },
                processResults: function (data) {
                    return {
                        results: data.results
                    };
                },
                cache: true
            },
            minimumInputLength: -1,
            placeholder: (lang == 'en' ? 'Search for a center' : 'جستجوی مرکز'),
            dropdownParent: parent,
            dropdownAutoWidth: true,
            templateResult: formatRepoCenter,
            templateSelection: formatRepoSelection
        });
    });
}

function auto_service() {
    $(".auto_service").each(function () {
        let type = '';
        if ($(this).data('type') != null) {
            type = $(this).data('type');
        }
        let lang = $("body").data('lang');
        let parent = $(this).closest('div');
        let dir = $("body").attr("dir");
        $(this).select2({
            dir: dir,
            ajax: {
                url: '/service/ajaxGetServiceJson?type=' + type + ts(),
                dataType: 'json',
                delay: 250,
                type: 'GET',
                data: function (params) {
                    return {
                        term: params.term
                    };
                },
                processResults: function (data) {
                    return {
                        results: data.results
                    };
                },
                cache: true
            },
            minimumInputLength: 2,
            placeholder: (lang == 'en' ? 'Search for a service' : 'جستجوی خدمت'),
            dropdownParent: parent,
            dropdownAutoWidth: true,
            templateResult: formatRepoWithoutAvatar,
            templateSelection: formatRepoSelection
        });
    });

    $(".auto_global_service").each(function () {
        let lang = $("body").data('lang');
        let parent = $(this).closest('div');
        let dir = $("body").attr("dir");
        $(this).select2({
            dir: dir,
            ajax: {
                url: '/globalservice/ajaxGetServiceJson' + ts('?'),
                dataType: 'json',
                delay: 250,
                type: 'GET',
                data: function (params) {
                    return {
                        term: params.term
                    };
                },
                processResults: function (data) {
                    return {
                        results: data.results
                    };
                },
                cache: true
            },
            minimumInputLength: 2,
            placeholder: (lang == 'en' ? 'Search for a global service' : 'جستجوی خدمت سراسری'),
            dropdownParent: parent,
            dropdownAutoWidth: true,
        });
    });
}

function auto_loinc(id = '') {
    $(id + " .auto_loinc").each(function () {
        let has_nr = 0;
        if ($("body").data('has_nr') == 1) {
            has_nr = 1;
        }

        let width = 'min-content';
        let parent = null;
        let dropdownAutoWidth = false
        if (!$(this).hasClass('noparent')) {
            parent = $(this).closest('div');
            width = 'auto';
            dropdownAutoWidth = true
        }
        let placeholder = (global_lang == 'en' ? 'Search for a service, physiotherapyو graphy, labtest...' : 'جستجوی خدمت، فیزیوتراپی، تصویربرداری، آزمایش...');
        if ($(this).data('placehold') == 'doctor') {
            placeholder = (global_lang == 'en' ? 'Search for a service' : 'جستجوی خدمت');
        }


        let insurancestr = '';
        if ($(this).data('insurancestr') !== undefined) {
            insurancestr = $(this).data('insurancestr');
        }

        $(this).select2({
            ajax: {
                url: '/service/ajaxGetLoincJson?has_nr=' + has_nr + insurancestr + ts(),
                dataType: 'json',
                delay: 250,
                type: 'GET',
                data: function (params) {
                    return {
                        term: params.term,
                        search_type: $(this).closest('tr').find('.loinc_type').val(),
                        insurance: $(this).data('insurance'),
                        type: $(this).data('type')
                    };
                },
                processResults: function (data) {
                    return {
                        results: data.results
                    };
                },
                cache: true
            },
            minimumInputLength: 2,
            placeholder: placeholder,
            width: width,
            multiple: true,
            maximumSelectionLength: 1,
            dropdownAutoWidth: dropdownAutoWidth,
            dir: $("body").attr("dir"),
            dropdownParent: parent,
            templateResult: formatRepoWithoutAvatar,
            templateSelection: formatRepoSelection,
        });
    });
}

function change_auto_loinc_placeholder(that) {
    let parent_tr = $(that).closest('tr');
    let text = (lang == 'en' ? 'Search for a service, physiotherapyو graphy, labtest...' : 'جستجوی خدمت، فیزیوتراپی، تصویربرداری، آزمایش...');
    let val = $(that).val();
    if (val == 'imaging') {
        text = (lang == 'en' ? 'Search for a imaging' : 'جستجوی عکس‌برداری');
    } else if (val == 'doctor') {
        text = (lang == 'en' ? 'Search for a service' : 'جستجوی خدمت');
    } else if (val == 'dentist') {
        text = (lang == 'en' ? 'Search for a dentist service' : 'جستجوی خدمت دندانپزشکی');
    } else if (val == 'physiotherapy') {
        text = (lang == 'en' ? 'Search for a physiotherapy' : 'جستجوی فیزیوتراپی');
    } else if (val == 'test') {
        text = (lang == 'en' ? 'Search for a labtest' : 'جستجوی آزمایش');
    }
    $(parent_tr).find('.select2-selection__placeholder').text(text);
}


/*
$(document).on("mouseenter", ".bio_tooltip", function () {
    if (typeof this._tippy === 'undefined') {
        let title = $(this).data('title');
        if (typeof title != 'undefined' && title != null && title != '') {
            tippy(this, {
                content: title,
                allowHTML: true,
                interactive: true,
            });
        }
    }
});*/

var check_activateTimer = null;
var check_activateTimer1 = null;
$(document).on("mousedown", ".uncheckable_radio", function () {
    let elem = $(this).find('input[type="radio"]');
    let parent_id = $(this).closest('.medical_doc_custom_form').data('parentid');
    let point_id = $(this).closest('.mainform').data('pointoptionid');

    if ($(elem).is(':checked')) // double click on radiobox reset radiobox
    {
        setTimeout(function () {
            $(elem).prop("checked", false);
            if (typeof check_activate === "function") {
                clearTimeout(check_activateTimer);
                check_activateTimer = setTimeout(check_activate, 50, parent_id, point_id);
            }
        }, 110);
    }
});

function auto_labdata() {
    $('.auto_labdata').each(function () {
        let lang = $("body").data('lang');
        let parent = $(this).closest('div');
        let dir = $("body").attr("dir");
        $(this).select2({
            dir: dir,
            ajax: {
                url: '/labtest/ajaxGetLabtestJson' + ts('?'),
                dataType: 'json',
                delay: 250,
                type: 'GET',
                data: function (params) {
                    return {
                        term: params.term
                    };
                },
                processResults: function (data) {
                    if (data.results.length == 1 && data.type == 'auto') {
                        $("#appointment_labdata_test_id").append($("<option />")
                            .attr("value", data.results[0].children[0].id)
                            .html(data.results[0].children[0].text)
                        ).val(data.results[0].children[0].id).trigger("change").select2("close");

                        init_ranges(data.results[0].children[0].unit, data.results[0].children[0].range, data.results[0].children[0].titer, data.results[0].children[0].posneg)
                    }
                    return {
                        results: data.results
                    };
                },
                cache: true
            },
            minimumInputLength: 2,
            placeholder: (lang == 'en' ? 'Search for a labtest' : 'جستجوی آزمایش'),
            dropdownAutoWidth: true,
            dropdownParent: parent,
            templateResult: formatRepoWithoutAvatar,
            templateSelection: formatRepoSelection
        });
    });
}


global_deligate.on("change", "#demo_switchery", function (event) {
    if (event.originalEvent.isTrusted === true) {
        // triggered click
    } else {
        let elem = document.getElementById('demo_switchery');
        if ($(elem).is(':checked')) {
            swal({
                    title: (global_lang == 'en' ? "Entering Demo Mode?" : "وارد حالت نمایشی می‌شوید؟"),
                    text: (global_lang == 'en' ? "Are you sure you want to enter demo mode? You can't visit real patients and visits will be demonstrative!" : "آیا مطمئنید که می‌خواهید وارد حالت نمایشی شوید؟ شما نمی‌توانید بیماران واقعی را ویزیت کنید و ویزیت‌ها نمایشی خواهند بود!"),
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonClass: "btn-success",
                    confirmButtonText: (global_lang == 'en' ? "I'm Sure!" : "مطمئنم!"),
                    cancelButtonText: (global_lang == 'fa' ? "لغو" : "Cancel"),
                    closeOnConfirm: false,
                    showLoaderOnConfirm: true
                },
                function (isConfirm) {
                    if (isConfirm) {
                        $.ajax({
                            type: "GET",
                            url: "/user/ajaxSetDemo?demo=" + elem.checked + ts(),
                            success: function (msg) {
                                if (msg != 'nok') {
                                    location.reload();
                                }
                            }
                        });
                    } else {
                        $('#demo_switchery').click();
                        //location.href = location.href;
                    }
                }
            );
        } else {
            $.ajax({
                type: "GET",
                url: "/user/ajaxSetDemo?demo=" + elem.checked + ts(),
                success: function (msg) {
                    if (msg != 'nok') {
                        location.reload();
                    }
                }
            });
        }
    }
});
global_deligate.on("change", "#tour_switchery", function () {
    let elem = document.getElementById('tour_switchery');
    $.ajax({
        type: "GET",
        url: "/user/ajaxSetTour?tour=" + elem.checked + ts(),
        success: function (msg) {
            if (msg != 'nok') {
                location.href = msg;
            }
        }
    });
});


function permission_click(clicked_onject) {
    var id = $(clicked_onject).data('id');
    var target_id = $(clicked_onject).data('target_id');
    var target_type = $(clicked_onject).data('target_type');
    $('#button_id').val($(clicked_onject).attr('id'));
    $.ajax({
        type: "POST",
        url: "/user/ajaxGetAdHocPermission" + ts('?'),
        data: "id=" + id + "&target_id=" + target_id + "&target_type=" + target_type,
        success: function (msg) {
            if (msg != 'nok') {
                var obj = JSON.parse(msg);

                $('#permission_id').val(obj.id);
                $('#permission_form').attr('action', $(location).attr('href'));

                $('#allowed_read_users').select2('data', null);
                $('#allowed_read_users').empty().trigger("change");
                for (var index in obj.allowed_read_users) {
                    var o = $("<option/>", {value: index, text: obj.allowed_read_users[index]});
                    $('#allowed_read_users').append(o);
                    $('#allowed_read_users option[value="' + index + '"]').prop('selected', true);
                }
                $('#allowed_read_users').trigger('change');


                $('#allowed_write_users').select2('data', null);
                $('#allowed_write_users').empty().trigger("change");
                for (var index in obj.allowed_write_users) {
                    var o = $("<option/>", {value: index, text: obj.allowed_write_users[index]});
                    $('#allowed_write_users').append(o);
                    $('#allowed_write_users option[value="' + index + '"]').prop('selected', true);
                }
                $('#allowed_write_users').trigger('change');


                $('#allowed_centers').select2('data', null);
                $('#allowed_centers').empty().trigger("change");
                for (var index in obj.allowed_centers) {
                    var o = $("<option/>", {value: index, text: obj.allowed_centers[index]});
                    $('#allowed_centers').append(o);
                    $('#allowed_centers option[value="' + index + '"]').prop('selected', true);
                }
                $('#allowed_centers').trigger('change');


                $('#denied_users').select2('data', null);
                $('#denied_users').empty().trigger("change");
                for (var index in obj.denied_users) {
                    var o = $("<option/>", {value: index, text: obj.denied_users[index]});
                    $('#denied_users').append(o);
                    $('#denied_users option[value="' + index + '"]').prop('selected', true);
                }
                $('#denied_users').trigger('change');


                $('#denied_centers').select2('data', null);
                $('#denied_centers').empty().trigger("change");
                for (var index in obj.denied_centers) {
                    var o = $("<option/>", {value: index, text: obj.denied_centers[index]});
                    $('#denied_centers').append(o);
                    $('#denied_centers option[value="' + index + '"]').prop('selected', true);
                }
                $('#denied_centers').trigger('change');


                if (obj.allow_all == 1) {
                    $('#allow_all').prop('checked', true);
                } else {
                    $('#allow_all').prop('checked', false);
                }


                $('.select_all_switchery_build').remove();
                var elems = Array.prototype.slice.call(document.querySelectorAll('.select_all_switchery'));
                elems.forEach(function (html) {
                    var switchery = new Switchery(html, {className: "select_all_switchery_build switchery switchery-large mr-20"});
                });

            }
        }
    });
}


function submit_permission_access() {
    $.ajax({
        type: "POST",
        url: "/user/ajaxSubmitAdHocPermission" + ts('?'),
        data: "id=" + $('#permission_id').val() + '&allow_all=' + $("#allow_all").is(':checked') + '&allowed_read_users=' + $("#allowed_read_users").select2("val") + '&allowed_write_users=' + $("#allowed_write_users").select2("val") + '&allowed_centers=' + $("#allowed_centers").select2("val") + '&denied_users=' + $("#denied_users").select2("val") + '&denied_centers=' + $("#denied_centers").select2("val"),
        success: function (msg) {
            if (msg != 'nok') {
                $('#' + $('#button_id').val()).addClass('btn-success');
                $('#' + $('#button_id').val()).removeClass('btn-default');
                $('#' + $('#button_id').val()).css('color', '');
            } else {
                alert('Problem in changing permissions!');
            }
        }
    });
}

jQuery(function ($) {
    $("input:password").strength({
        scoreClasses: {
            invalid: 'strength-invalid',
            weak: 'strength-weak',
            good: 'strength-good',
            strong: 'strength-strong'
        }
    });
});


var initial;

function new_added() {
    clearTimeout(initial);
    initial = window.setTimeout(
        function () {
            $('.new_added').removeClass('new_added');
        }, 5000);
}


$(document).ready(function () {
    make_menu_sortable();
});

function make_menu_sortable() {
    try {
        $('#site-main-menu').each(function () {
            $(this).sortable({
                placeholder: "panel_highlight3",
                forcePlaceholderSize: true,
                items: ".site-main-menu-sub",
                tolerance: "pointer",
                //handle: ".site-main-menu-sub",
                start: function (event, ui) {
                    ui.item.toggleClass("panel_highlight");
                },
                stop: function (event, ui) {
                    ui.item.toggleClass("panel_highlight");
                    var array = $(this).sortable("serialize", {key: "s"});
                    array = array.split('s=').join('').split('&').join(',');
                    //console.log("order=" + array + '&name=' + $(this).data('menu_name'));
                    $.ajax({
                        type: "POST",
                        url: "/home/ajaxHomeOrder" + ts('?'),
                        data: "order=" + array + '&name=menu&type=' + $(this).data('menu_name'),
                        success: function (msg) {
                            //console.log(msg);
                        }
                    });
                }
            });
        });

        $('.site-menu-sub').each(function () {
            $(this).sortable({
                placeholder: "panel_highlight3",
                forcePlaceholderSize: true,
                items: ".site-menu-item",
                tolerance: "pointer",
                //handle: ".site-main-menu-sub",
                start: function (event, ui) {
                    ui.item.toggleClass("panel_highlight");
                },
                stop: function (event, ui) {
                    ui.item.toggleClass("panel_highlight");
                    var array = $(this).sortable("serialize", {key: "s"});
                    array = array.split('s=').join('').split('&').join(',');
                    //console.log("order=" + array + '&name=' + $(this).data('menu_name'));
                    $.ajax({
                        type: "POST",
                        url: "/home/ajaxHomeOrder" + ts('?'),
                        data: "order=" + array + '&name=menu&type=' + $(this).data('menu_name'),
                        success: function (msg) {
                            //console.log(msg);
                        }
                    });
                }
            });
        });
    } catch (err) {
        console.log(err.message);
    }
}

global_deligate.on('click', '.bio_change_class div', function () {
    var val = $(this).text();
    var html = '<input class="form-control" data-lastval="' + val + '" placeholder="' + $(this).parent().data('name') + '" value="' + val + '">';
    $(this).parent().html(html);
    $(this).parent().addClass('active');
    $(this).find('input:first-child').focus();
});

$(document).on('change click keyup input paste', '.bio_change_class input', function (event) {
    if (event.keyCode === 13) { //enter
        var id = $(this).closest('tr').find('.selectable-item').val();
        var url = window.location.href.split('/index')[0] + '/ajax';
        var value = $(this).val();
        var name = $(this).parent().data('name');
        var parent = $(this).parent();
        $.ajax({
            type: "POST",
            url: url + '?id=' + id + '&action=change_value' + ts(),
            data: "name=" + name + '&value=' + value,
            success: function (msg) {
                if (msg != 'nok') {
                    $(parent).html('<div>' + value + '</div>');
                    $(parent).closest('tr').addClass('new_added');
                    $(parent).removeClass('active');
                    new_added();
                }
            }
        });
    } else if (event.keyCode === 27) { //escape
        var parent = $(this).parent();
        $(parent).html('<div>' + $(this).data('lastval') + '</div>');
        $(parent).removeClass('active');
    }
});


$(document).on('mouseenter', '.clipboard', function () {
    var clipboard = new ClipboardJS(this);
    let that = this;
    clipboard.on('success', function (e) {
        $(that).removeData('title');
        $(that).removeAttr('data-title');
        $(that).webuiPopover({
            title: '',
            content: 'Copied!',
            trigger: 'manual',
            style: 'body-success',
            delay: {
                show: null,
                hide: 1000
            },
        });
        $(that).webuiPopover('show');
        $(that).webuiPopover('hide');
    });
});

function toggleTooltip(tip) {
    if (tip.state.isVisible) {
        tip.hide();
        tip.enable();
    } else if (!tip.state.isVisible) {
        tip.show();
        tip.disable();
    }
}

global_deligate.on('click', '.factor_payment', function () {
    let id = $(this).data('id');
    $('#payment-modal .factor_payment_id').text('#' + id);
    $('#payment-modal #fid_to_pay').val(id);
    $('#factor_payment').html('');
    $.ajax({
        url: '/payment/factorModal?id=' + id + ts(),
        type: "GET",
        success: function (msg) {
            if (msg != 'nok') {
                let obj = JSON.parse(msg);
                console.log({obj});
                $('#factor_payment').html(obj.html);
                $('#payment-modal .btn_POS').hide();
                $('#payment-modal .btn_Cache').hide();
                $('#payment-modal .btn_Rollback').hide();
                $('#payment-modal .btn_Print').hide();
                $('#payment-modal .payment_status').hide();

                $('#payment-modal #factor_payment_footer').show();
                if (obj.status == "1") {
                    $('#payment-modal .btn_Print').show();
                    $('#payment-modal .payment_status').show().removeClass('ribbon-danger').addClass('ribbon-success');
                    $('#payment-modal .payment_status .ribbon-inner').text('Paid');
                    if (obj.last_pay <= 60) {
                        $('#payment-modal .btn_Rollback').show();
                    }
                } else if (obj.status == "0") {
                    $('#payment-modal .btn_POS').show();
                    $('#payment-modal .btn_Cache').show();
                } else if (obj.status == "-1") {
                    $('#payment-modal .payment_status').show().removeClass('ribbon-success').addClass('ribbon-danger');
                    $('#payment-modal .payment_status .ribbon-inner').text('Canceled');
                }
            }
        }
    });
});

$(document).on('change click keyup input paste', "input[data-plugin='asSpinner'][type='text']", function (event) {
    $("input[data-plugin='asSpinner'][type='text']").webuiPopover('destroy');

    let id = $(this).attr('id');
    let val = $(this).data('precision') == 0 ? parseInt($(this).val()) : parseFloat($(this).val());
    let minStr = '';
    let maxStr = '';
    if (typeof $(this).data('min') !== 'undefined') {
        let min = $(this).data('precision') == 0 ? parseInt($(this).data('min')) : parseFloat($(this).data('min'));
        if (val < min)
            minStr = "Minimum for this value is " + min;
    }
    if (typeof $(this).data('max') !== 'undefined') {
        let max = $(this).data('precision') == 0 ? parseInt($(this).data('max')) : parseFloat($(this).data('max'));
        if (val > max)
            maxStr = "Maximum for this value is " + max;
        if (minStr != '' && maxStr != '')
            maxStr = '<br>' + maxStr;
    }
    if (minStr != '' || maxStr != '') {
        $('#' + id).webuiPopover({
            title: 'Value Alert',
            content: maxStr + minStr,
            style: 'warning',
            trigger: 'manual',
            closeable: true,
        });
        $('#' + id).webuiPopover('show');

    }
});


global_deligate.on('click', '.aparat_video', function () {
    let link = $(this).data('link');
    let id = $(this).data('id');
    $('#aparat_video').attr('src', 'https://www.aparat.com/video/video/embed/videohash/' + link + '/vt/frame');
    $('#aparat_link').val('https://www.aparat.com/v/' + link);
    $('#aparat_id').val(id);
});

global_deligate.on('click', '.save_aparat_link', function () {
    let id = $('#aparat_id').val();
    let aparat_link = $('#aparat_link').val();

    $.ajax({
        type: "POST",
        url: '/disease/ajaxHelp' + ts('?'),
        data: "id=" + id + '&action=edit' + '&content=' + aparat_link,
        success: function (msg) {
            if (msg === 'ok') {
                let spl = aparat_link.split('aparat.com/v/');
                if (spl.length > 1) {
                    $('#aparat_video').attr('src', 'https://www.aparat.com/video/video/embed/videohash/' + spl[1] + '/vt/frame');
                }
                $(".aparat_video[data-id=" + id + "]").attr('data-link', spl[1]);
                $(".aparat_video[data-id=" + id + "]").data('link', spl[1]);
                serialize_all_visit_info(1);
            } else {
                alert('A problem in saving help content!');
            }
        }
    });
});


function getDateOfWeek(index, lang = 'fa') {
    var dayNames = ['Sunday', 'Monday', 'Thursday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    if (lang == 'fa') {
        dayNames = ['یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'];
    }
    return dayNames[index];
}


function ajax_management_chart(duration = 'month') {
    $.ajax({
        url: '/home/ajaxManagementData?duration=' + duration + '&lang=' + global_lang + ts(),
        type: "GET",
        dataType: "json",
        success: function (data) {

            $('#count_all').text(data.count_all);
            $('.total_visits').text(data.count_all);
            $('#finalized').text(data.finalized);
            $('.total_finalized').text(data.finalized + (data.rx_success > 0 ? ' (' + data.rx_success + '%)' : ''));

            Highcharts.setOptions({
                lang: {
                    numericSymbols: null,
                    thousandsSep: ','
                }
            });
            $('.male_percent').text('0%');
            $('.female_percent').text('0%');
            $('.tamin_percent').text('0%');
            $('.salamat_percent').text('0%');
            $('.serious_conflict_percent').text('0%');
            $('.moderate_conflict_percent').text('0%');
            $('.generic_drug_percent').text('0%');
            $('.brand_drug_percent').text('0%');


            for (let i = 0; i < data.gender_stat.data.length; i++) {
                if (data.gender_stat.data[i]['key'] == 0) {
                    $('.male_percent').text(data.gender_stat.data[i]['percentage'] + '%');
                }
                if (data.gender_stat.data[i]['key'] == 1) {
                    $('.female_percent').text(data.gender_stat.data[i]['percentage'] + '%');
                }
            }

            for (let i = 0; i < data.patient_insurance_stat.data.length; i++) {
                if (data.patient_insurance_stat.data[i]['key'] == 1) {
                    $('.tamin_percent').text(data.patient_insurance_stat.data[i]['percentage'] + '%');
                }
                if (data.patient_insurance_stat.data[i]['key'] == 2) {
                    $('.salamat_percent').text(data.patient_insurance_stat.data[i]['percentage'] + '%');
                }
            }

            for (let i = 0; i < data.drug_conflict_stat.data.length; i++) {
                if (data.drug_conflict_stat.data[i]['key'] == '1_serious_conflict') {
                    $('.serious_conflict_percent').text(data.drug_conflict_stat.data[i]['percentage'] + '%');
                }
                if (data.drug_conflict_stat.data[i]['key'] == '2_moderate_conflict') {
                    $('.moderate_conflict_percent').text(data.drug_conflict_stat.data[i]['percentage'] + '%');
                }
            }

            for (let i = 0; i < data.drug_brand_stat.data.length; i++) {
                if (data.drug_brand_stat.data[i]['key'] == 'Generic') {
                    $('.generic_drug_percent').text(data.drug_brand_stat.data[i]['percentage'] + '%');
                }
                if (data.drug_brand_stat.data[i]['key'] == 'Brand') {
                    $('.brand_drug_percent').text(data.drug_brand_stat.data[i]['percentage'] + '%');
                }
            }


            donut_chart('gender_stat', data.gender_stat, '200');
            bar_chart('patient_insurance_stat', data.patient_insurance_stat, 'column', '200');
            bar_chart('finalized_stat', data.finalized_stat, 'bar', '200');
            bar_chart('drug_conflict_stat', data.drug_conflict_stat, 'bar', '200');
            donut_chart('drug_brand_stat', data.drug_brand_stat, '200');
            bar_chart('frequently_used_drug_stat', data.frequently_used_drug_stat, 'column', '300');
            bar_chart('frequently_used_labtest_stat', data.frequently_used_labtest_stat, 'column', '300');
            if (data.best_physician.data.length > 0) {
                $('#best_physician').closest('.hichcharting_home').show();
                bar_chart('best_physician', data.best_physician, 'column', '300');
            } else {
                $('#best_physician').closest('.hichcharting_home').hide();
            }

            if (data.ward_wait_time != null && data.ward_wait_time[0].data.length > 0) {
                $('#ward_wait_time').closest('.hichcharting_home').show();
                multi_line_chart('ward_wait_time', data.ward_wait_time, 'column', '300');
            } else {
                $('#ward_wait_time').closest('.hichcharting_home').hide();
            }


            multi_line_chart('ward_stat', data.ward_stat, 'column', '300');
            $('.group_div').hide();
            if (data.best_assistant != null) {
                Object.keys(data.best_assistant).forEach(key => {
                    bar_chart('best_assistant_' + key, data.best_assistant[key], 'column', '300');
                    $('.group_div_' + key).show();
                });
            }


            /* if (chart_type == 'pie') {
                 if (data.data.length == 0) {
                     $('#' + type).closest(".row").hide();
                     return;
                 }
                 pie_chart(type, data);
             } else if (chart_type == 'line') {
                 if (data.data.length == 0) {
                     $('#' + type).closest(".col-md-12").hide();
                     return;
                 }
                 line_chart(type, data);
             } else if (chart_type == 'multiline') {
                 if (data[0].data.length == 0) {
                     $('#' + type).closest(".col-md-12").hide();
                     return;
                 }
                 multi_line_chart(type, data);
             }*/
        },
        cache: false
    });
}

function ajax_management_chart_md(duration = 'month') {
    $.ajax({
        url: '/home/ajaxManagementDataMd?duration=' + duration + '&lang=' + global_lang + ts(),
        type: "GET",
        dataType: "json",
        success: function (data) {

            $('.total_visits').text(data.count_all);
            $('.total_finalized').text();
            $('.Signed').text(data.Signed);
            $('.NotSigned').text(data.NotSigned);
            Highcharts.setOptions({
                lang: {
                    numericSymbols: null,
                    thousandsSep: ','
                }
            });

            if (data.md_type.data.length > 0) {
                $('#md_type').closest('.hichcharting_home').show();
                bar_chart('md_type', data.md_type, 'column', '300');
            } else {
                $('#md_type').closest('.hichcharting_home').hide();
            }
            if (data.md_gid.data.length > 0) {
                $('#md_gid').closest('.hichcharting_home').show();
                bar_chart('md_gid', data.md_gid, 'column', '300');
            } else {
                $('#md_gid').closest('.hichcharting_home').hide();
            }
        },
        cache: false
    });
}

function ajax_high_chart(chart_type, type, duration = 'month', height = '300') {
    $.ajax({
        url: '/home/ajaxStatData?type=' + type + '&duration=' + duration + '&lang=' + global_lang + ts(),
        type: "GET",
        dataType: "json",
        success: function (data) {
            Highcharts.setOptions({
                lang: {
                    numericSymbols: null,
                    thousandsSep: ','
                }
            });
            if (chart_type == 'pie') {
                if (data.data.length == 0) {
                    $('#' + type).closest(".row").hide();
                    return;
                }
                pie_chart(type, data);
            } else if (chart_type == 'line') {
                if (data.data.length == 0) {
                    $('#' + type).closest(".col-md-12").hide();
                    return;
                }
                line_chart(type, data);
            } else if (chart_type == 'multiline') {
                if (data[0].data.length == 0) {
                    $('#' + type).closest(".col-md-12").hide();
                    return;
                }
                multi_line_chart(type, data, 'line', height);
            }
        },
        cache: false
    });
}

function pie_chart(dom, data) {
    Highcharts.chart(dom, {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: ''
        },
        tooltip: {
            useHTML: true,
            valueSuffix: data.valueSuffix,
            formatter: function () {
                return highchart_formtter(this)
            }
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        colors: data.colors,
        series: [{
            name: data.name,
            colorByPoint: data.colorByPoint,
            data: data.data
        }]
    });
}

function donut_chart(dom, data, height = '250px') {
    Highcharts.chart(dom, {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            backgroundColor: null,
            type: 'pie',
            innerSize: '50%',
            height: height,
            spacingBottom: 10,
            marginBottom: -40,
            spacingTop: 0,
            marginTop: -60,
            spacingLeft: 0,
            marginLeft: 0,
            spacingRight: 0,
            marginRight: 0,
        },
        title: {
            text: ''
        },
        tooltip: {
            useHTML: true,
            valueSuffix: data.valueSuffix,
            formatter: function () {
                return highchart_formtter(this)
            }
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%'],
                showInLegend: true,
                size: '110%'
            }
        },
        colors: data.colors,
        series: [{
            innerSize: '50%',
            name: data.name,
            colorByPoint: data.colorByPoint,
            data: data.data
        }]
    });
}

function bar_chart(dom, data, type = 'bar', height = '250px', layout = 'vertical') {
    Highcharts.chart(dom, {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: type,
            height: height,
        },
        title: {
            text: ''
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        legend: {
            layout: layout,
        },
        plotOptions: {
            spline: {
                lineWidth: 10,
                states: {
                    hover: {
                        lineWidth: 15
                    }
                },
                marker: {
                    enabled: false
                }
            }
        },
        tooltip: {
            useHTML: true,
            valueSuffix: data.valueSuffix,
            formatter: function () {
                return highchart_formtter(this)
            }
        },
        colors: data.colors,
        xAxis: {
            categories: data.categories
        },
        yAxis: {
            title: {
                text: data.yAxis
            }
        },
        series: [{
            name: data.name,
            colorByPoint: data.colorByPoint,
            data: data.data,
            showInLegend: data.showInLegend
        }]
    });
}

function highchart_formtter(that) {
    let ret = '<b>' + that.point.name + '</b><br/><span>' + (global_lang == 'fa' ? '\u202B' : '') + that.y + (typeof that.point.valueSuffix !== 'undefined' ? ' ' + that.point.valueSuffix : '') + (typeof that.point.percentage !== 'undefined' ? ' (' + that.point.percentage.toFixed(2) + '%)' : '') + '</span>';
    return toFarsiNumber(ret, global_lang);
}

function line_chart(dom, data, height) {
    Highcharts.chart(dom, {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'line',
            height: height,
            scrollablePlotArea: {
                minWidth: 600,
                scrollPositionX: 1
            }
        },
        title: {
            text: ''
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            spline: {
                lineWidth: 10,
                states: {
                    hover: {
                        lineWidth: 15
                    }
                },
                marker: {
                    enabled: false
                }
            }
        },
        tooltip: {
            useHTML: true,
            valueSuffix: data.valueSuffix,
            formatter: function () {
                return highchart_formtter(this)
            }
        },
        colors: data.colors,
        xAxis: {
            categories: data.categories
        },
        yAxis: {
            title: {
                text: data.yAxis
            }
        },
        series: [{
            name: data.name,
            colorByPoint: data.colorByPoint,
            data: data.data
        }]
    });
}

function multi_line_chart(dom, data, type = 'line', height) {
    let datas = [];
    for (let i = 0; i < data.length; i++) {
        datas.push({
            name: data[i].name,
            color: data[i].colors[Math.floor(data[i].colors.length / 2)],
            id: 'dom_' + i,
            grouping: false
        });
        datas.push({
            linkedTo: 'dom_' + i,
            name: data[i].name,
            colorByPoint: data[i].colorByPoint,
            data: data[i].data,
            colors: data[i].colors,
            legendColor: data[i].legendColor,
        });
    }

    Highcharts.chart(dom, {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: type,
            height: height,
            scrollablePlotArea: {
                minWidth: 600,
                scrollPositionX: 1
            }
        },
        title: {
            text: ''
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            spline: {
                lineWidth: 10,
                states: {
                    hover: {
                        lineWidth: 15
                    }
                },
                marker: {
                    enabled: false
                }
            },
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false
                }
            }
        },
        tooltip: {
            useHTML: true,
            valueSuffix: data[0].valueSuffix,
            formatter: function () {
                return highchart_formtter(this)
            }
        },
        xAxis: {
            categories: data[0].categories
        },
        yAxis: {
            title: {
                text: data[0].yAxis
            }
        },
        series: datas
    });
}

function ewalletCreditAlert(title, text, confirm_btn_txt) {
    return;
    swal({
            title: title,
            text: text,
            type: "warning",
            showCancelButton: true,
            confirmButtonClass: "btn-success",
            confirmButtonText: confirm_btn_txt,
            cancelButtonText: (global_lang == 'fa' ? "لغو" : "Cancel"),
            closeOnConfirm: false,
            showLoaderOnConfirm: true
        },
        function (isConfirm) {
            if (isConfirm) {
                location.href = '/ewallet/purchaseEwallet';
            } else {
                console.log("Check cancel button");
                $.ajax({
                    url: '/ewallet/recordcancelchargewarning' + ts('?'),
                    type: 'GET',
                    success: function (resp) {
                        console.log(resp);
                    }
                });
            }
        }
    );
}

function create_pondProfile_Profile(selector, serverId = null, user_photo = '', sex = '0') {

    if ($('.filepond--root').length == 1) {
        FilePond.destroy(document.querySelector(selector));
        pondProfile = null;
    }

    FilePond.registerPlugin(
        FilePondPluginImageFilter,
        FilePondPluginImageCrop,
        FilePondPluginImagePreview,
        FilePondPluginImageExifOrientation,
        FilePondPluginFileValidateType,
        FilePondPluginImageResize,
        FilePondPluginImageTransform,
        FilePondPluginImageEdit,
        FilePondPluginPdfConvert,
        FilePondPluginImageOverlay,
        FilePondPluginGetFile,
    );


    let csrf = $('meta[name="csrf-token"]').attr('content');

    FilePond.setOptions({
        allowDrop: true,
        allowReplace: true,
        allowRevert: true,
        allowRemove: true,
        instantUpload: false,
        imageEditInstantEdit: true,
        credits: false,
        pdfConvertType: 'image/png',
        pdfConvertMarginHeight: 60,
        labelIdle: [
            global_lang == 'en' ? 'Edit Photo' : 'ویرایش عکس'
        ],
        imageCropAspectRatio: '1:1',
        stylePanelLayout: 'compact circle',
        styleLoadIndicatorPosition: 'center bottom',
        styleProgressIndicatorPosition: 'right bottom',
        styleButtonRemoveItemPosition: 'left bottom',
        styleButtonProcessItemPosition: 'right bottom',
        server: {
            url: '',
            process: {
                url: '/home/ajaxUploadProfilePhotofile/',
                headers: {'X-CSRF-TOKEN': csrf},
                ondata: (formData) => {
                    formData.append('id', serverId);
                    return formData;
                },
                onload: (response) => {
                    $(('#user_profile_photo')).prop('src', (response + "?rand=" + Math.random() * 1000));
                }
            },
            revert: null,
            load: {
                url: '/home/ajaxLoadProfilePhotofile/',
                headers: {'X-CSRF-TOKEN': csrf},
            },
            remove: (source, load, error) => {
                $.ajax({
                    url: '/home/ajaxRevertProfilePhotofile/',
                    type: 'POST',
                    data: 'id=' + source,
                    success: function (resp) {
                        if (resp == 'ok') {
                            load();
                        }
                    }
                });
            }
        },
        onaddfile: (error, file) => {
            if (file.serverId == null) {
            }
        },
        onprocessfile: (error, file) => {
        },
        onupdatefiles: (files) => {
            if (files.length <= 0) {
                if (sex == '1') {
                    $(('#user_profile_photo')).prop('src', ("/theme/custom/img/female.png?rand=" + Math.random() * 1000));
                } else {
                    $(('#user_profile_photo')).prop('src', ("/theme/custom/img/male.png?rand=" + Math.random() * 1000));
                }
            }
        }
    });

    let photo_file = [];
    if (user_photo != '') {
        photo_file = [{
            source: serverId,
            options: {
                type: 'local',
                metadata: {
                    'markup': null
                }
            }
        }];
    }

    pondProfile = FilePond.create(document.querySelector(selector), {
        files: photo_file,
        acceptedFileTypes: ['image/*', /*'application/pdf', 'application/zip', 'application/x-compressed', 'application/x-zip-compressed', 'multipart/x-zip'*/],
        imageResizeTargetWidth: 1280,
        imageResizeMode: "contain",
        imageResizeUpscale: "false"
    });

    pondProfile.imageEditEditor = dokaCreate({
        utils: ['crop', 'resize', 'filter', 'color', 'markup'],
        markupFontFamily: 'IranSans',
        markupFontFamilyOptions: [
            ['IranSans', 'IranSans'],
            ['Zar', 'B Zar'],
            ['Titr', 'B Titr'],
            ['Tahoma', 'Tahoma']
        ],
        markupLineStyle: [.005, null],
        onconfirm: (output, item) => {
            pondProfile.processFile(item);
        }
    });
}

function ajax_echarts(chart_type, type, duration = 'month') {
    $.ajax({
        url: '/home/ajaxStatData?type=' + type + '&duration=' + duration + '&chart=echarts&lang=' + global_lang,
        type: "GET",
        dataType: "json",
        success: function (data) {
            if (chart_type == 'pie') {
                if (data.data.length == 0) {
                    $('#' + type).closest(".row").hide();
                    return;
                }
                echarts_pie_chart(type, data);
            } else if (chart_type == 'area') {
                if (data.data.length == 0) {
                    $('#' + type).closest(".col-md-12").hide();
                    return;
                }
                echarts_area_chart(type, data);
            }
        },
        cache: false
    });
}

function echarts_pie_chart(dom, data) {
    var chartDom = document.getElementById(dom);
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        tooltip: {
            useHTML: true,
            trigger: 'item'
        },
        legend: {
            top: 'bottom',
            textStyle: {
                fontSize: '12',
                fontFamily: 'Roboto, IRANSansX'
            }
        },
        series: [{
            type: 'pie',
            radius: ['40%', '80%'],
            center: ['50%', '42%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 5,
                borderColor: '#fff',
                borderWidth: 2
            },
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '15',
                    fontWeight: 'bold',
                    fontFamily: 'Roboto, IRANSansX'
                }
            },
            labelLine: {
                show: false
            },
            data: data.data,
            color: ['#c70038', '#ff8d18', '#ffc300', '#edde52', '#aed45c', '#58c785', '#00baad', '#2a7b9b', '#3d3d6b', '#501849', '#910d3e']
        }]
    };

    option && myChart.setOption(option);

    window.onresize = function () {
        myChart.resize();
    };
}


function ts(del = '&') {
    return del + 'ts=' + Date.now();
}


(function ($) {
    $.retryAjax = function (ajaxParams) {
        var errorCallback;
        ajaxParams.tryCount = (!ajaxParams.tryCount) ? 0 : ajaxParams.tryCount;
        ajaxParams.retryLimit = (!ajaxParams.retryLimit) ? 2 : ajaxParams.retryLimit;
        ajaxParams.suppressErrors = true;

        if (ajaxParams.error) {
            errorCallback = ajaxParams.error;
            delete ajaxParams.error;
        } else {
            errorCallback = function () {

            };
        }

        ajaxParams.complete = function (jqXHR, textStatus) {
            if ($.inArray(textStatus, ['timeout', 'abort', 'error']) > -1) {
                this.tryCount++;
                if (this.tryCount <= this.retryLimit) {
                    // fire error handling on the last try
                    if (this.tryCount === this.retryLimit) {
                        this.error = errorCallback;
                        delete this.suppressErrors;
                    }

                    //try again
                    $.ajax(this);
                    return true;
                }
                swal({
                    title: (global_lang == 'fa' ? 'هشدار' : 'Warning'),
                    text: (global_lang == 'fa' ? 'اتصال اینترنت شما با اختلال مواجه است!' : 'Your internet connection was interrupted!'),
                    type: "error",
                    confirmButtonText: (global_lang == 'fa' ? 'تایید' : 'OK')
                });
                return true;
            }
        };

        $.ajax(ajaxParams);
    };
}(jQuery));


function hide_search_in_admit() {
    $('.change_hash.force_hide').removeClass('force_hide');
    $('.admit_hash.force_hide').removeClass('force_hide');
    $('.search_in_admit').val('');
    $('.search_in_admit').hide();
}


var inj_timer1;
var inj_item1;
var inj_lastval1;
global_deligate.on('keyup', '.search_in_menus', function (event) {
    let q = $(this).val().toLowerCase().toPersianCharacter();
    let parent = $(this).closest('.dropdown-menu');

    clearTimeout(inj_timer1);
    if (q.length >= 1 && q != inj_lastval1) {
        inj_item1 = this;
        inj_timer1 = setTimeout(function () {
            $(parent).find('.force_hide').removeClass('force_hide');
            $(parent).find("[data-keyword]").each(function (index) {
                usage = true;
                let text = ' ' + $(this).data('keyword').toString().toLowerCase();
                $(this).addClass('force_hide');
                if (text.indexOf(q) >= 0) {
                    $(this).removeClass('force_hide');
                }
            });
        }, 30);
    } else if (q == '') {
        $(parent).find('.force_hide').removeClass('force_hide');
    }
});

$(document).on('change input', '.search_in_menus', function () {
    let q = $(this).val().toLowerCase().toPersianCharacter();
    let parent = $(this).closest('.dropdown-menu');
    if (q == '') {
        $(parent).find('.force_hide').removeClass('force_hide');
    }
});

global_deligate.on('click', '#ward_div', function () {
    setTimeout(function () {
        $('#ward_div + .dropdown-menu .search_in_menus').focus();
    }, 100);
});

global_deligate.on('click', '#supervisor_div', function () {
    setTimeout(function () {
        $('#supervisor_div + .dropdown-menu .search_in_menus').focus();
    }, 100);
});

global_deligate.on("click", ".alert_link", function () {
    let title = $(this).data('title');
    let message = $(this).data('message');
    let type = $(this).data('swaltype');
    let id = $(this).data('id');
    show_bioalert(id, title, message, type);

});

function show_bioalert(id, title, message, type) {
    swal({
            title: title,
            text: String.fromHtmlEntities(message),
            html: true,
            type: type,
            showCancelButton: false,
            confirmButtonText: (global_lang == 'en' ? 'OK' : 'باشه'),
            containerClass: 'alert_container',
            confirmButtonClass: "btn btn-primary",
            closeOnConfirm: true
        },
        function (isConfirm) {
            if (isConfirm) {
                $.ajax({
                    type: "GET",
                    url: "/alert/touch/" + id + ts('?'),
                    success: function (obj) {
                        $('#alert_id-' + id + ' .status_div').remove();
                        let count = parseInt($('#alert_div_count').html());
                        $('#alert_div_count').html(--count);
                        $('#alert_div_title').html(global_lang == 'fa' || global_lang == 'local' ? toFarsiNumber(count) + ' مورد تازه' : count + ' New')
                        if (count <= 0) {
                            $('#alert_div_count').hide();
                            $('#alert_div_title').hide();
                        }
                    }
                });
            }
        });
}

/**
 * Convert a string to HTML entities
 */
String.prototype.toHtmlEntities = function () {
    return this.replace(/./gm, function (s) {
        // return "&#" + s.charCodeAt(0) + ";";
        return (s.match(/[a-z0-9\s]+/i)) ? s : "&#" + s.charCodeAt(0) + ";";
    });
};

/**
 * Create string from HTML entities
 */
String.fromHtmlEntities = function (string) {
    return (string + "").replace(/&#\d+;/gm, function (s) {
        return String.fromCharCode(s.match(/\d+/gm)[0]);
    })
};

function ZoomGallery(select) {
    $(select).each(function (i) {
        $(this).magnificPopup({
            delegate: 'a',
            type: 'image',
            closeOnContentClick: false,
            closeBtnInside: false,
            mainClass: 'mfp-with-zoom mfp-img-mobile ' + $(this).data('added_class'),
            image: {
                verticalFit: true,
                titleSrc: function titleSrc(item) {
                    return item.el.attr('title') + '<a class="image-source-link" href="' + item.el.attr('data-source') + '" target="_new">' + (global_lang == 'en' ? 'Image Source' : 'منبع مستند') + '</a>';
                }
            },
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300,
                opener: function opener(element) {
                    return element.find('img');
                }
            }
        });
    });
}

global_deligate.on("click", ".swap_uid", function () {
    var cid = $(this).data('cid');
    var uid = $(this).data('uid');
    $.ajax({
        type: "GET",
        url: "/visit/movevisit?cid=" + cid + '&uid=' + uid + ts(),
        success: function (msg) {
            if (msg != 'nok') {
                swal({
                    title: '',
                    text: msg,
                    html: true,
                    showCancelButton: true,
                    showConfirmButton: false,
                    cancelButtonText: (global_lang == 'fa' ? "لغو" : "Cancel"),
                    closeOnConfirm: false,
                    customClass: 'swal_deserve_width'
                });
                setTimeout(function () {
                    $('.webui-popover').remove();
                    $('.selectpick').select2({
                        dir: $("body").attr("dir"),
                        minimumResultsForSearch: 1,
                        width: 'auto',
                        containerCssClass: 'z-index-50001'
                    });
                }, 500);
            }
        }
    });
});

function error_swal(title = null, message = null) {
    swal({
        title: (title == null ? (global_lang == 'en' ? "Error" : "خطا") : title),
        text: (message == null ? (global_lang == 'en' ? "An error has occurred during processing!" : "یک خطا در حین پردازش رخ داده است!") : message),
        type: "error",
        confirmButtonText: (global_lang == 'en' ? "OK" : "تایید"),
    });
}

global_deligate.on("click", ".move_visit", function () {
    let cid = $(this).data('cid');
    let uid = $(this).data('uid');
    let type = $(this).data('type');
    let dest_uid = $(this).closest('tr').find('.selectpick').val();

    swal({
            title: (global_lang == 'en' ? "Confirmation" : "تاییدیه"),
            text: (global_lang == 'en' ? "Are you confirm the visit movement?" : "آیا فرآیند جابه‌جایی ویزیت‌ها را تایید می‌نمایید؟"),
            type: "warning",
            showCancelButton: true,
            confirmButtonClass: "btn-success",
            confirmButtonText: (global_lang == 'en' ? "I'm Sure!" : "مطمئنم!"),
            cancelButtonText: (global_lang == 'en' ? "Cancel" : "لغو"),
            closeOnConfirm: false,
            showLoaderOnConfirm: true
        },
        function (isConfirm) {
            if (isConfirm) {
                $.ajax({
                    type: "POST",
                    url: "/visit/ajaxMoveVisit?cid=" + cid + '&uid=' + uid + ts(),
                    data: 'type=' + type + '&dest_uid=' + dest_uid,
                    success: function (msg) {
                        if (msg == 'ok') {
                            swal.close();
                            $('#example').DataTable().ajax.reload();
                        } else {
                            error_swal();
                        }
                    }
                });
            }
        }
    );
});

function payFactor(factorid, amount, paytype, patient_name = "NR") {
    var paytext = (global_lang == 'en' ? 'Cash' : 'نقد');
    switch (paytype) {
        case 1:
            paytext = (global_lang == 'en' ? 'Cash' : 'نقد');
            break;
        case 2:
            paytext = (global_lang == 'en' ? 'POS' : 'POS');
            break;
        case 3:
            paytext = (global_lang == 'en' ? 'Online' : 'برخط');
            break;
    }
    amount = amount.toString();
    var amountToman = (amount / 10).toString().split(/(?=(?:\d{3})+(?:\.|$))/g).join(",");

    var onlinepay = '';
    var dropdown = '';
    if (paytype == 3) {
        onlinepay = '<section class="pay_option_section"><div>' +
            '<input type="radio" id="control_01" class="pay_options green_checkbox labelauty" name="options" value="0" checked data-labelauty="' + (global_lang == 'en' ? 'Appointment doesn`t cancel if not paid' : 'در صورت عدم پرداخت نوبت لغو نشود') + '" >' +
            '</div>' +
            '<div><input type="radio" id="control_02" class="pay_options green_checkbox labelauty" name="options" value="1" data-labelauty="' + (global_lang == 'en' ? 'Appointment cancel if not paid' : 'در صورت عدم پرداخت لغو شود') + '">' +
            '</div></section>';
        dropdown = '<select id="restrict" class="pt-20 pb-10">' +
            '<option value=-1>' + (global_lang == 'en' ? 'No payment deadline' : 'بدون مهلت پرداخت') + '</option>' +
            '<option value=1>' + (global_lang == 'en' ? '6 hours before the visit paid' : 'شش ساعت قبل از ویزیت پرداخت شود') + '</option>' +
            '<option value=2>' + (global_lang == 'en' ? '1 day before the visit paid' : 'یک روز قبل از ویزیت پرداخت شود') + '</option>' +
            '<option value=3>' + (global_lang == 'en' ? '3 days before the visit paid' : 'سه روز قبل از ویزیت پرداخت شود') + '</option>' +
            '<option value=4>' + (global_lang == 'en' ? '7 days before the visit paid' : 'هفت روز قبل از ویزیت پرداخت شود') + '</option>' +
            '<option value=5>' + (global_lang == 'en' ? '14 days before the visit paid' : 'چهارده روز قبل از ویزیت پرداخت شود') + '</option>' +
            '<option value=6>' + (global_lang == 'en' ? '30 days before the visit paid' : 'یک ماه قبل از ویزیت پرداخت شود') + '</option>' +
            '</select>'
    }
    if (paytype == 2) { //pos payment
        dropdown = "<div id='pos-list-popup'>" + $("#pos-list").html() + '</div>';
        // var posID = $('input[name="paypos"]:checked').val();
        // $.ajax({
        //     url: "/pos/sendtopos",
        //     method: "POST",
        //     data: {
        //         posID: posID,
        //         factorID: factorid,
        //         amount: inputValue
        //     },
        //     success: function(response) {
        //         console.log(response)
        //     }
        // });
    }
    var amountInput = dropdown + onlinepay + '<div style="text-align: center;display: flex;justify-content: center;align-items: center;margin: 10px 0px ' + (paytype == 3 ? ' 20px' : ' 10px') + ';"><div class="input-group" style="width:50%;">' +
        '<input type="text" readonly id="swal_input_field" class="form-control swal-content__input" autocomplete="off" value="' + (amount.split(/(?=(?:\d{3})+(?:\.|$))/g).join(",")) + '">' +
        '<div class="input-group-append">' +
        '<span class="input-group-text">' + (global_lang == 'en' ? 'Rials' : 'ریال') + '</span>' +
        '</div></div></div>' +
        '<div class="pay_option_person">' + patient_name +
        '<span class="formatvalue"> (' + amountToman + ' ' + (global_lang == 'en' ? 'Tomans' : 'تومان') + ')</span></div>';


    swal({
        title: (global_lang == 'en' ? paytext + ' ' + 'Payment' : 'پرداخت' + ' ' + paytext),
        text: amountInput,
        customClass: 'swal-wide',
        confirmButtonClass: "btn-success ml-5 mr-5",
        confirmButtonText: (global_lang == 'en' ? 'Pay' : 'پرداخت'),
        cancelButtonText: (global_lang == 'en' ? 'Cancel' : 'لغو'),
        cancelButtonClass: "ml-5 mr-5",
        showCancelButton: true,
        showConfirmButton: true,
        closeOnConfirm: false,
        showLoaderOnConfirm: true,
    }, function () {
        var posID = $('input[name="paypos"]:checked').val();
        var inputValue = $('#swal_input_field').val();
        var delflag = $('input[name="nationality"]:checked').val();
        var restict = $('#restrict').val()
        extraparam = '';
        if (paytype == 3) {
            extraparam = '&delflag=' + delflag + '&restict=' + restict;
        }
        if (inputValue === false) return false;
        if (inputValue === "") {
            swal.showInputError("Amount can't be blank!");
            return false
        } else {
            if (paytype == 2) {
                $.ajax({
                    url: "/pos/sendtopos",
                    method: "POST",
                    dataType: "json",
                    data: {
                        posID: posID,
                        factorID: factorid,
                        amount: inputValue
                    },
                    success: function (response) {
                        swal({
                            title: response['data'],
                            text: (response['statusCode'] == 200) ? (global_lang == 'en' ? 'Plesae Wait...' : 'لطفا صبر کنید...') : "",
                            type: (response['statusCode'] == 200) ? "success" : "error",
                            showCancelButton: false,
                            showConfirmButton: false
                            // confirmButtonText: (global_lang == 'en' ? 'OK' : 'تایید')
                        }, function () {
                        });

                    }
                });
            } else {
                $.ajax({
                    type: "POST",
                    url: "/cashregister/ajaxpay",
                    data: "factorid=" + factorid + '&amount=' + inputValue + '&paytype=' + paytype + extraparam,
                    success: function (msg) {
                        if (msg.status != 'nok' && paytype == 1) {
                            $('.Factor_' + factorid + ' .btn-grey').removeClass('btn-grey').addClass('btn-success');
                            $('.Factor_' + factorid + ' .action_btn').remove();
                            $('.Factor_' + factorid + ' .btn-success').text((global_lang == 'en' ? 'Paid: (' + inputValue + ' Rials)' : 'پرداخت شده: (' + inputValue + ' ریال)'));
                        }

                        var swal_type = "success";
                        if (msg.status == 'nok')
                            swal_type = "error";
                        swal({
                            title: msg.title,
                            text: msg.message,
                            type: swal_type,
                            confirmButtonText: (global_lang == 'en' ? 'OK' : 'تایید')
                        }, function () {
                        });
                        setTimeout(function () {
                            swal.close();
                            if (typeof refresh_table === 'function') {
                                refresh_table('waiting', $("input[name=date_search_start]").val(), $("input[name=date_search_end]").val());
                            }
                        }, 1500);
                    }
                });
            }
        }
    });

    setTimeout(function () {
        $('.pay_options:not(.labelauty)').labelauty({
            icon: false,
            same_width: true
        });
    }, 50);

    $('#restrict').select2({
        dropdownParent: $('#restrict').closest('div')
    });
}

global_deligate.on('input', '#swal_input_field', function () {
    let amountRial = $(this).val().replace(/\D/g, '');
    let amountToman = (amountRial / 10).toString().split(/(?=(?:\d{3})+(?:\.|$))/g).join(",");
    if (amountToman == '') {
        $(".formatvalue").text("(" + 0 + ' ' + (global_lang == 'en' ? 'Tomans' : 'تومان') + ")")
    } else {
        $(".formatvalue").text("(" + amountToman + ' ' + (global_lang == 'en' ? 'Tomans' : 'تومان') + ")")
    }
});


global_deligate.on('click', '.get_salamat_sequenceNumber', function () {
    let vid = $(this).data('vid');
    let that = this;
    $.ajax({
        type: "GET",
        url: "/salamat/getSeqNum/" + vid,
        success: function (msg) {
            if (msg != '' && msg != 'nok') {
                $(that).replaceWith(msg)
            }
        }
    });
});


function url_exist(url) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status === 404) {
                return false;
            }
            return true;
        }
        return false;
    };
    return false;
}

function changeInsuranceVisitSwal(hash, current_ins) {
    $('.webui-popover').remove();
    $('.datepicker-container.pwt-hide').remove();

    const ins_select_arr = [
        ['-1', global_lang == 'fa' ? 'ارسال نشده' : 'Was not sent'],
        ['1', global_lang == 'fa' ? 'تامین اجتماعی' : 'Tamin'],
        ['2', global_lang == 'fa' ? 'سلامت' : 'Salamat'],
    ];
    let changeInsHtml = '<div class="row"><div class="col-lg-9"><select class="form-control" data-plugin="selectpicker" data-live-search="true" name="change_ins_selectbox" id="change_ins_selectbox">';
    for (let ii = 0; ii < ins_select_arr.length; ii += 1) {
        let select_str = '';
        if (ins_select_arr[ii][0] == current_ins) {
            select_str = ' selected ';
        }
        changeInsHtml += '<option ' + select_str + ' value="' + ins_select_arr[ii][0] + '">' + ins_select_arr[ii][1] + '</option>';
    }
    changeInsHtml += '</select></div>';
    changeInsHtml += '<div class="col-lg-3"><button style="width: 100%;" type="button" data-hash="' + hash + '" class="btn btn-success send_to_ins_req_btn">' + (global_lang == 'fa' ? 'ارسال' : 'Submit') + '</button></div></div>';
    swal({
        title: (global_lang == 'fa' ? 'تغییر بیمه ارسالی' : 'Change Rx Insurance'),
        text: changeInsHtml,
        type: '',
        showCancelButton: true,
        showConfirmButton: false,
        cancelButtonText: (global_lang == 'fa' ? 'بستن' : 'Close'),
        closeOnCancel: false,
        closeOnConfirm: false
    }, function (isConfirm) {
        if (!isConfirm) {
            swal.close();
        }
    });

    setTimeout(function () {
        $('#change_ins_selectbox').select2({
            dir: $("body").attr("dir"),
            minimumResultsForSearch: 1,
            width: 'auto',
            containerCssClass: 'z-index-50001'
        });
    }, 500);


    $(".send_to_ins_req_btn").on('click', function (event) {
        const hash = $(this).data('hash');
        const insurence = $("#change_ins_selectbox option:selected").val();
        $.ajax({
            type: "GET",
            url: "/monitoring/ajaxChangeRxInsurance?hash=" + hash + "&insurance=" + insurence,
            success: function (msg) {
                var obj = JSON.parse(msg);
                if (obj['type'] == 'SalamatAuthproblem') {
                    swal({
                        title: 'Error',
                        text: 'نام کاربری و رمز عبور کاربر مورد نظر اشتباه است و یا وارد نشده است!',
                        html: true,
                        confirmButtonText: (global_lang == 'fa' ? 'تایید' : 'OK'),
                        type: "error"
                    });
                } else if (obj['type'] == 'SalamatAuthOTP') {
                    swal({
                        title: 'Error',
                        text: 'نام کاربری و رمز عبور کاربر مورد نظر اشتباه است و یا وارد نشده است!',
                        html: true,
                        confirmButtonText: (global_lang == 'fa' ? 'تایید' : 'OK'),
                        type: "error"
                    });
                } else if (obj['type'] == 'TaminAPI' && obj.errors.length > 0) {
                    swal({
                        title: 'Error',
                        text: obj.errors[0].error_Msg,
                        html: true,
                        confirmButtonText: (global_lang == 'fa' ? 'تایید' : 'OK'),
                        type: "error"
                    });
                } else {
                    swal({
                        title: obj.title,
                        text: obj.message,
                        type: obj.status,
                        confirmButtonText: (global_lang == 'fa' ? 'تایید' : 'OK'),
                    });
                }
                renewAjaxTable();
            }
        });
    });
}


global_deligate.on('click', '.medicaldoceye', function () {
    event.preventDefault();
    let fieldid = $(this).data('fieldid');
    let formid = $(this).closest('.mainform').data('formid');
    let hash = $(this).closest('form').data('hash');
    let prefix = $(this).data('prefix');
    let type = $(this).data('type');
    let pointoptionid = $(this).data('pointoptionid');

    if ($(this).data('init') === undefined) {
        $(this).data('init', '1');
        $(this).webuiPopover({
            title: (global_lang == 'fa' ? 'مقادیر قبلی برای ' : 'Previous values of ') + prefix,
            width: 500,
            show: 10,
            style: 'medicaldoceye',
            closeable: true,
            backdrop: true,
            trigger: 'manual',
            type: 'async',
            url: '/gv/ajaxLoadLastMedicalDocs?hash=' + hash + '&formid=' + formid + '&pointoptionid=' + pointoptionid + '&fieldid=' + fieldid + '&type=' + type + ts()
        });
        $(this).webuiPopover('show');
    } else {
        $(this).webuiPopover('show');
    }
});
global_deligate.on('click', 'fieldset.notactive legend', function () {
    $(this).closest('fieldset.notactive').addClass('active').removeClass('notactive');
    if (typeof this._tippy !== 'undefined') {
        $(this).removeClass('bio_tooltip');
        this._tippy.destroy();
    }
});


global_deligate.on('click', 'fieldset.active.closable legend', function () {
    $(this).closest('fieldset.active').addClass('notactive').removeClass('active');
});

global_deligate.on('click', '.is_deserve_monitoring', function () {
    let iranian = $(this).data('nationality') == '0' ? '1' : '0';
    let national_code = $(this).data('nationalcode') + '';
    let insurance_number = $(this).data('insurancenumber') + '';
    $(this).append($('.refresh_icon').html());
    $.ajax({
        url: '/patient/ajaxGetData',
        data: 'ss=1&national_code=' + national_code + '&iranian=' + iranian + '&force=1&insurance_number=' + insurance_number,
        type: 'POST',
        success: function (msg) {
            $(this).find('.icon').remove();
            if (msg != 'nok') {
                var obj = JSON.parse(msg);
                if (obj['type'] == 'SalamatAuthproblem') {
                    salamat_login(obj['username'], obj['password'], 1);
                } else if (obj['type'] == 'SalamatAuthOTP') {
                    salamat_OTP();
                } else if (obj['type'] == 'TaminAPI' && obj.errors.length > 0) {
                    swal({
                        title: 'Error',
                        text: obj.errors[0].error_Msg,
                        html: true,
                        confirmButtonText: 'Understand!',
                        type: "error"
                    });
                } else {
                    let photo_dom = '';
                    if (obj.photo != '' && obj.photo != null) {
                        photo_dom = '<td class="user_deserve_pic">' + '<img class="rounded img-bordered m-5" style="max-width: 190px;" loading="lazy" src="/uploads/patients/' + obj.photo + '" alt=""></td>';
                    }
                    let html = '<table style="width: 100%;    text-align: start;"><tr>' + photo_dom + '<td>' + obj.demography + '</td></tr></table>';
                    renewAjaxTable();
                    swal({
                        title: '',
                        text: html,
                        html: true,
                        confirmButtonText: (global_lang == 'fa' ? 'تایید' : 'OK'),
                        customClass: 'swal_deserve_width2 userpic'
                    });
                }
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $(this).find('.icon').remove();
        }
    });
});

global_deligate.on('click', '.medical_record_pdf', function () {
    let hash = $(this).closest('form').data('hash');
    let id = $(this).closest('tbody').data('id');
    window.open(location.protocol + '//' + location.host + '/gv/medicalpdf?hash=' + hash + '&id=' + id, '_blank', 'location=yes,fullscreen=yes,scrollbars=yes,status=yes');
});
global_deligate.on('click', '.medical_SMS_pdf', function () {
    let hash = $(this).closest('form').data('hash');
    let id = $(this).closest('tbody').data('id');
    send_patient_sms_md(hash, id);
});

global_deligate.on('click', '.medical_record_sign', function () {
    let hash = $(this).closest('form').data('hash');
    let id = $(this).closest('tbody').data('id');
    window.open(location.protocol + '//' + location.host + '/gv/medicalpdf?sign=1&hash=' + hash + '&id=' + id, '_blank', 'location=yes,fullscreen=yes,scrollbars=yes,status=yes');
});
global_deligate.on('click', '.copy_item_id', function () {
    navigator.clipboard.writeText($(this).data('id'));
});


function getVisitLog(hash) {
    $.ajax({
        url: '/log/getVisitLog',
        data: 'hash=' + hash,
        type: 'GET',
        success: function (obj) {
            if (obj.status == 'ok') {
                swal({
                    title: '',
                    text: obj.html,
                    html: true,
                    showCancelButton: false,
                    confirmButtonClass: "btn-success",
                    confirmButtonText: (global_lang == 'fa' ? "باشه" : "OK"),
                    customClass: 'swal_deserve_width'
                });
            }
        }
    });
}

global_deligate.on("wheel", "input[type=number]", function (e) {
    $(this).blur();
});

global_deligate.on('click', '.add_work_flow_participant', function () {
    let work_flow_participant = $(this).closest('tr').find('.work_flow_participant').val();
    let stepid = $(this).closest('tr').data('stepid');
    let article_id = $('#work_flow_window').data('article_id');
    let multiple = $(this).data('multiple');
    let currentstepid = $(this).closest('tr').data('currentstepid');
    if (work_flow_participant == null) {
        swal({
            title: (global_lang == 'en' ? 'Warning' : 'هشدار'),
            text: (global_lang == 'en' ? 'Please Select a participant!' : 'لطفا یک مشارکت‌کننده انتخاب نمایید!'),
            type: "warning"
        });
        return;
    }

    $('#work_flow_div').hide();
    $('#work_flow_window').removeClass('col-lg-8').addClass('col-lg-12');

    console.log(work_flow_participant, article_id, stepid, multiple);

    $.ajax({
        url: '/workflow/setParticipant',
        data: 'work_flow_participant=' + work_flow_participant + '&article_id=' + article_id + '&stepid=' + stepid + '&currentstepid=' + currentstepid,
        type: 'GET',
        success: function (obj) {
            if (obj.status == 'ok') {
                console.log(obj);
            }
        }
    });
});


function get_socket_host_name() {
    let hostname = 'ws.' + window.location.hostname;
    if (hostname == 'ws.clinics.tums.ac.ir') {
        hostname = 'wsbioarc.tums.ac.ir';
    } else if (hostname == 'ws.thcb.tums.ac.ir') {
        hostname = 'thcws.tums.ac.ir';
    }

    return hostname;
}