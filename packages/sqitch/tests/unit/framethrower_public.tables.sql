begin;
  select plan(1);

select tables_are(
    'framethrower_public',
    array[
      'animation',
      'company',
      'company_admin_users',
      'feedback_request',
      'feedback_response',
      'headline',
      'instructor',
      'news',
      'news_comment',
      'note',
      'note_comment',
      'premium',
      'premium_definition',
      'profile',
      'profile_social',
      'submission',
      'tumbleweed',
      'company_group_month',
      'company_group_premium',
      'company_pro_group'
    ]
);

   select * from finish();
rollback;