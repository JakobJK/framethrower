begin;
  select plan(1);

select tables_are(
    'framethrower_private',
    array[
      'company_pro_agreement',
      'global_settings',
      'profile_secrets',
      'stripe_customer'
    ]
);

   select * from finish();
rollback;