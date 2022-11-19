begin;
  select plan(12);

  select columns_are('framethrower_public', 'instructor', array['id', 'created_at', 'updated_at', 'profile_id', 'accepted_agreement', 'banner','biography', 'availability', 'status']);

  select col_is_pk('framethrower_public', 'instructor', 'id', 'id is a primary key');
  select col_is_fk('framethrower_public', 'instructor', 'profile_id', 'profile_id is a foreign key');

  select col_type_is('framethrower_public', 'instructor', 'id', 'text', 'id is the type of text');
  select col_type_is('framethrower_public', 'instructor', 'profile_id', 'uuid', 'id is the type of uuid');
  select col_type_is('framethrower_public', 'instructor', 'banner', 'text', 'banner is the type of text');
  select col_type_is('framethrower_public', 'instructor', 'biography', 'text', 'biography is the type of text');
  select col_type_is('framethrower_public', 'instructor', 'availability', 'framethrower_public.instructor_availability', 'availability is the type of text');
  select col_type_is('framethrower_public', 'instructor', 'accepted_agreement', 'boolean', 'accepted_agreement is the type of boolean');
  select col_type_is('framethrower_public', 'instructor', 'status', 'framethrower_public.instructor_status', 'id is the type of uuid');

  select col_type_is('framethrower_public', 'instructor', 'created_at', 'timestamp with time zone', 'created_at is the type of "timestamp with time zone');
  select col_type_is('framethrower_public', 'instructor', 'updated_at', 'timestamp with time zone', 'updated_at is the type of "timestamp with time zone');

  select * from finish();

rollback;