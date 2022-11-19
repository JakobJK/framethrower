begin;
  select plan(9);

  select columns_are('framethrower_private', 'company_pro_agreement', array['id', 'company_id', 'created_at', 'updated_at', 'current_period', 'students_amount', 'monthly_feedbacks_per_student']);

  select col_is_pk('framethrower_private', 'company_pro_agreement', 'id', 'id is the primary key');
  select col_is_fk('framethrower_private', 'company_pro_agreement', 'company_id', 'company_id is a foreign key');

  select col_type_is('framethrower_private', 'company_pro_agreement', 'id', 'uuid', 'id is the type of uuid');
  select col_type_is('framethrower_private', 'company_pro_agreement', 'company_id', 'uuid', 'upload_id is the type of uuid');
  select col_type_is('framethrower_private', 'company_pro_agreement', 'created_at', 'timestamp with time zone', 'created_at is the type of "timestamp with time zone"');
  select col_type_is('framethrower_private', 'company_pro_agreement', 'updated_at', 'timestamp with time zone', 'updated_at is the type of "timestamp with time zone"');
  select col_type_is('framethrower_private', 'company_pro_agreement', 'current_period', 'timestamp with time zone', 'current_period is the type of "timestamp with time zone"');
  select col_type_is('framethrower_private', 'company_pro_agreement', 'students_amount', 'integer', 'students_amount is the type of integer');

  select * from finish();
rollback;

