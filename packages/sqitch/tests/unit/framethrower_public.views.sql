begin;
    select plan(1);
    select views_are(
        'framethrower_public',
        array[
            'v_admin_feedback_overview',
            'v_admin_feedback_overview_collapsed',
            'v_admin_instructor',
            'v_admin_member',
            'v_animation',
            'v_animation_preview',
            'v_company_admin',
            'v_feedback',
            'v_instructor',
            'v_instructor_feedback',
            'v_instructor_pool',
            'v_note',
            'v_own_note',
            'v_pro_list',
            'v_pro_membership',
            'v_company_admin_groups',
            'v_company_admin_members',
            'v_company_admin_months',
            'v_instructor_settings',
            'v_post',
            'v_pro_own_feedback'
            ]
        );
    select * from finish();
rollback;