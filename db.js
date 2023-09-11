const mongoose= require('mongoose')

//role
const role_Schema= mongoose.Schema({
    role_name:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    is_deleted:{
        type:Boolean,
        default:true,
        required:true

    },
    created_by:{
        type:Number,
        required:true

    },
    updated_by:{
        type:Number

    },
    deleted_by:{
        type:Number

    },
    created_at:{
        type:Date,
        required:true

    },
    updated_at:{
        type:Date

    },
    deleted_at:{
        type:Date

    }


})
const role= mongoose.model('role',role_Schema);


//feature


const feature_Schema= mongoose.Schema({
    feature_name:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    is_deleted:{
        type:Boolean,
        required:true

    },
    created_by:{
        type:Number,
        required:true

    },
    updated_by:{
        type:Number

    },
    deleted_by:{
        type:Number

    },
    created_at:{
        type:Date,
        required:true

    },
    updated_at:{
        type:Date

    },
    deleted_at:{
        type:Date

    },


})
const feature= mongoose.model('feature',feature_Schema);


//role_feature

const role_feature_Schema=mongoose.Schema({

    role_id_fk:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'role',
            required:true 
            
    },

    feature_id_fk:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'feature',
        required:true 
    },
    view_perm:{
        type:Boolean,
        required:true 
        
    },	
    add_perm:{
        type:Boolean,
        required:true 
    },
    edit_perm:{
        type:Boolean,
        required:true 
    },
    delete_perm:{
        type:Boolean,
        required:true 
    },
    
    is_deleted:{
    
        type:Boolean,
        default:false,
        required:true
    },
    created_by:{
        type:Number,
        required:true
    },
    updated_by:{
        type:Number
    },
    deleted_by:{
        type:Number
    },
    created_at:{
        type:Date,
        required:true
    },
    updated_at:{
        type:Date,
    },
    deleted_at:{
        type:Date
    }
})
const role_feature=mongoose.model('role_feature',role_feature_Schema);


//user

const user_Schema=mongoose.Schema({
    role_id_fk:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'role',
            required:true 
    },
    first_name:{
        type:String,
        required:true
    },	
    middle_name:{
        type:String
        
    },	
    last_name:{
        type:String,
        required:true
    },	
    email_id:{
        type:String,
        required:true
    },
    contact_no:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    user_image:{
        type:String
    },
     is_deleted:{
    
        type:Boolean,
        default:false,
        required:true
    },
    created_by:{
        type:Number,
        required:true
    },
    updated_by:{
        type:Number
    },
    deleted_by:{
        type:Number
    },
    created_at:{
        type:Date,
        required:true
    },
    updated_at:{
        type:Date,
    },
    deleted_at:{
        type:Date
    },
})
const user=mongoose.model('user',user_Schema);



//company

const company_Schema=mongoose.Schema({
    company_name:{
    type:String,
    required:true      
            
    },
    website_link:{
        type:String,
        required:true
    },	
    is_deleted:{
    
        type:Boolean,
        default:false,
        required:true
    },
    created_by:{
        type:Number,
        required:true
    },
    updated_by:{
        type:Number
    },
    deleted_by:{
        type:Number
    },
    created_at:{
        type:Date,
        required:true
    },
    updated_at:{
        type:Date,
    },
    deleted_at:{
        type:Date
    },
})
const company=mongoose.model('company',company_Schema);

//company _contact_person

const company_contact_person_Schema=mongoose.Schema({

    company_id_fk:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'company',
        required:true      
                
        },
        contact_person_name:{
            type:String,
            required:true
        },
        contact_person_email_id:{
            type:String,
            required:true
        },
        contact_person_contact_no:{
            type:String,
            required:true
        },	
        is_deleted:{
        
            type:Boolean,
            default:false,
            required:true
        },
        created_by:{
            type:Number,
            required:true
        },
        updated_by:{
            type:Number
        },
        deleted_by:{
            type:Number
        },
        created_at:{
            type:Date,
            required:true
        },
        updated_at:{
            type:Date,
        },
        deleted_at:{
            type:Date
        }
})
const company_contact_person = mongoose.model('company_contact_person',company_contact_person_Schema);


const skill_Schema=mongoose.Schema({

       
        skill_name:{
            type:String,
            required:true
        },
        description:{
            type:String
           
        },
        is_deleted:{
        
            type:Boolean,
            default:false,
            required:true
        },
        created_by:{
            type:Number,
            required:true
        },
        updated_by:{
            type:Number
        },
        deleted_by:{
            type:Number
        },
        created_at:{
            type:Date,
            required:true
        },
        updated_at:{
            type:Date,
        },
        deleted_at:{
            type:Date
        }
})
const skill = mongoose.model('skill_tbl', skill_Schema);



const location_Schema=mongoose.Schema({

       
        country:{
            type:String,
            required:true
        },
        state:{
            type: String,
            required:true      
                
        },
        city:{
            type: String,
            required:true      
                
        },
        pin_code:{
            type: Number,
            required:true      
                
        },
        
        is_deleted:{
        
            type:Boolean,
            default:false,
            required:true
        },
        created_by:{
            type:Number,
            required:true
        },
        updated_by:{
            type:Number
        },
        deleted_by:{
            type:Number
        },
        created_at:{
            type:Date,
            required:true
        },
        updated_at:{
            type:Date,
        },
        deleted_at:{
            type:Date
        }
})
const location= mongoose.model('location',location_Schema);


const qualification_Schema=mongoose.Schema({

       
   qualification_name:{
        type:String,
        required:true
    },
    description:{
        type: String
           
            
    },
    is_deleted:{
    
        type:Boolean,
        default:false,
        required:true
    },
    created_by:{
        type:Number,
        required:true
    },
    updated_by:{
        type:Number
    },
    deleted_by:{
        type:Number
    },
    created_at:{
        type:Date,
        required:true
    },
    updated_at:{
        type:Date,
    },
    deleted_at:{
        type:Date
    }
})
const qualification = mongoose.model('qualification',qualification_Schema);



const job_Schema=mongoose.Schema({

       
    job_name:{
        type:String,
        required:true
    },
    company_id_fk:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'company',
        required:true      
            
    },
    min_years_of_exp:{
        type: Number,
        required:true      
            
    },
    max_years_of_exp:{
        type: Number,
        required:true      
            
    },
    min_budget:{
        type: String,
        required:true      
            
    },
    max_budget:{
        type: String,
        required:true      
            
    },
    location_id_fk:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'location',
        required:true      
            
    },
    qualification_id_fk:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'qualification',
        required:true      
            
    },
    job_type:{
        type: Number
              
            
    },
    job_description:{
        type: String
              
            
    },

    
    is_deleted:{
    
        type:Boolean,
        default:false,
        required:true
    },
    created_by:{
        type:Number,
        required:true
    },
    updated_by:{
        type:Number
    },
    deleted_by:{
        type:Number
    },
    created_at:{
        type:Date,
        required:true
    },
    updated_at:{
        type:Date,
    },
    deleted_at:{
        type:Date
    }
})
const job = mongoose.model('job',job_Schema);


const job_skill_Schema=mongoose.Schema({

    job_id_fk:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'job',
        required:true      
            
    },
    
    skill_id_fk:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'skill',
        required:true      
            
    }
})
const job_skill = mongoose.model('job_skill',job_skill_Schema);

const candidate_Schema=mongoose.Schema({

       
    first_name:{
        type:String,
        required:true
    },
    middle_name:{
        type:String
        
    },
    last_name:{
        type:String,
        required:true
    },
    designation:{
        type:String
       
    },
    email_id:{
        type:String,
        required:true
    },
    contact_no:{
        type:String,
        required:true
    },
    
    total_exp_in_months:{
        type: Number,
        required:true      
            
    },
    relevent_exp_in_months:{
        type: Number,
        required:true      
            
    },
    current_ctc:{
        type: Number,
        required:true      
            
    },
    expected_ctc:{
        type: Number,
        required:true      
            
    },
    notice_period_in_months:{
        type: Number,
        required:true      
            
    },
    current_location_id_fk:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'location',
        required:true      
            
    },
    is_offer_in_hand:{
        type: Boolean,
        required:true      
            
    },
    offer_in_hand:{
        type: Number
            
            
    },
    status:{
        type: Number,
        required:true      
            
    },
    remarks:{
        type: String
             
            
    },
    resume_path:{
        type: String,
        required:true      
            
    },
    is_deleted:{
    
        type:Boolean,
        default:false,
        required:true
    },
    created_by:{
        type:Number,
        required:true
    },
    updated_by:{
        type:Number
    },
    deleted_by:{
        type:Number
    },
    created_at:{
        type:Date,
        required:true
    },
    updated_at:{
        type:Date,
    },
    deleted_at:{
        type:Date
    }
})
const candidate = mongoose.model('candidate',candidate_Schema);



const candidate_prepared_location_Schema=mongoose.Schema({
    candidate_id_fk:{
             type: mongoose.Schema.Types.ObjectId,
             ref:'candidate',
             required:true       
            
    },
    location_id_fk:{
              type:mongoose.Schema.Types.ObjectId,
               ref:'location',
                required:true      
    }
})
const candidate_prepared_location = mongoose.model('candidate_prefered_location',candidate_prepared_location_Schema);



const candidate_skills_Schema=mongoose.Schema({

    candidate_id_fk:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'candidate',
        required:true      
            
    },
    skills_id_fk:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'skill',
        required:true      
            
    }
})
const candidate_skills = mongoose.model('candidate_skills_tbl',candidate_skills_Schema);

const interview_Schema=mongoose.Schema({

    company_id_fk:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'company',
        required:true      
            
    },
    company_contact_person_id_fk:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'company_contact_person'
        
             
    },
    candidate_id_fk:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'candidate',
        required:true      
            
    },
    job_id_fk:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'job'
              
            
    },
    status:{
        type:Number,
        required:true
    },
    
    invitee_email:{
        type:String
        
    },
    invite_text:{
        type:String
        
    },
    feedback:{
        type:String
        
    },
    
    is_deleted:{
    
        type:Boolean,
        default:false,
        required:true
    },
    created_by:{
        type:Number,
        required:true
    },
    updated_by:{
        type:Number
    },
    deleted_by:{
        type:Number
    },
    created_at:{
        type:Date,
        required:true
    },
    updated_at:{
        type:Date,
    },
    deleted_at:{
        type:Date
    }
})
const interview = mongoose.model('interview',interview_Schema);

const resume_Schema=mongoose.Schema({

    resume_path:{
        type: String,
        required:true      
            
    },
    assigned_by_user_id_fk:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true      
            
    },
    

    status:{
        type:Number,
        required:true
    },
    
    is_deleted:{
    
        type:Boolean,
        default:false,
        required:true
    },
    created_by:{
        type:Number,
        required:true
    },
    updated_by:{
        type:Number
    },
    deleted_by:{
        type:Number
    },
    created_at:{
        type:Date,
        required:true
    },
    updated_at:{
        type:Date,
    },
    deleted_at:{
        type:Date
    }
})
const resume = mongoose.model('resume',resume_Schema);

const setting_Schema=mongoose.Schema({
    user_id_fk:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true      
            
    },

    language_setting:{
        type:Number
        
    },

    opinion_email_setting:{
        type:Boolean
       
    },

    remainder_email_setting:{
        type:Boolean
        
    },

    news_email_setting:{
        type:Boolean
        
    },
    
    is_deleted:{
    
        type:Boolean,
        default:false,
        required:true
    },
    created_by:{
        type:Number,
        required:true
    },
    updated_by:{
        type:Number
    },
    deleted_by:{
        type:Number
    },
    created_at:{
        type:Date,
        required:true
    },
    updated_at:{
        type:Date,
    },
    deleted_at:{
        type:Date
    }
})
const setting = mongoose.model('setting',setting_Schema);





module.exports={
   role,
   feature,
   role_feature,
   user,
   company,
   company_contact_person,
   skill,
   location,
   qualification,
   job,job_skill,
   candidate,
   candidate_prepared_location,
 candidate_skills,
 interview,
 resume,
 setting
}