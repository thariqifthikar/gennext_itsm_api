const { Int32 } = require("bson");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    // id:{type:String,  //ID will be added 
    //     unique:true},
     
    id :{type:String,
    unique:true},
    user_name:String,
    account_id:String,
    password:String,
    first_name:String,
    last_name:String,
    main_user:{type:String,
                maxlength:1
    },
    email_address:String,
    sms_number:String,
    user_conf:String,
    phone:String,
    cell_phone:String,
    notes:String,
    location:Number, //int
    car_number:String,
    building:String,
    floor:String,
    cubic:String,
    administrator:String,
    manager:String,
    version:Number, //int
    cust_list1:Number, //int
    cust_list2:Number, //int
    cust_text1:String,
    cust_text2:String,
    cust_notes:String,
    cust_int1:Number, //int
    cust_int2:Number, //int
    department:Number, //int
    company:Number, //int
    company_backup:Number, //int
    disable:{type:String,
            maxlength:1
            },
    expiration_time:Date,
    cust_date1:Date,
    cust_date2:Date,
    history_version:Number, //int
    ldap:Number,//int
    change_time:Date,
    changed_by:String,
    email_notifications:{ //Whether the user receives email notifications (Y) or not (N)
        type:String,
        maxlength:1
    },
    permissions_by_groups:{  //Applicable to admins only: Whether the admins permissions are managed by group (Y) or individually (N)
        type:String,
        maxlength:1
    },
    user_manager_name:String,
    chat_nick_name:String,
    enable_login_to_eup:{
        type:String,
        maxlength:1        //Determines whether the user can log in to the End-User Portal (Y) or not (N)
    },

    agreement:Number ,     //int
    display_name:String,
    secondary_email:String,
    sr_email_notif_condition:String,
    login_user:String,
    login_domain:String,
    login_guid:String,
    calculated_user_name:String,
    calculated_user_name_upper:String,
    locale:String,
    timezone:String,
    charset:String,
    login_user_upper:String,
    user_name_upper:String,
    ssp_theme:{
        type:Number, //int
        maxlength:11,
        default:0
    }

    
    // first_name:String,
    // last_name: String,
    // email:String
    


},{
    timestamps: true,
    
}

)
const userVar = mongoose.model('users',userSchema)
module.exports = userVar
