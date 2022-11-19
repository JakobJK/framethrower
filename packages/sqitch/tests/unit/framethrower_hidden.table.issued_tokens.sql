begin;

  select plan(16);
  -- Columns
  select columns_are('framethrower_hidden', 'issued_tokens', array[ 'id', 'profile_id', 'token', 'token_type', 'created_at', 'expire_at' ], 'id, profile_id, token, token_type, created_at and expire_at are the columns');
  -- Primary Keys
  select col_is_pk('framethrower_hidden', 'issued_tokens', 'id', 'id is the primary key');
  select col_is_fk('framethrower_hidden', 'issued_tokens', 'profile_id', 'profile_id is a foreign key');

  -- Checking Columns Types
  select col_type_is('framethrower_hidden', 'issued_tokens', 'id', 'uuid', 'id is the type of uuid');
  select col_type_is('framethrower_hidden', 'issued_tokens', 'profile_id', 'uuid', 'profile_id is the type of uuid');
  select col_type_is('framethrower_hidden', 'issued_tokens', 'token', 'text', 'id is the type of uuid');
  select col_type_is('framethrower_hidden', 'issued_tokens', 'token_type', 'framethrower_hidden.token_type', 'id is the type of uuid');
  select col_type_is('framethrower_hidden', 'issued_tokens', 'created_at', 'timestamp with time zone', 'created_at is the type of "timestamp with time zone"');
  select col_type_is('framethrower_hidden', 'issued_tokens', 'expire_at', 'timestamp with time zone', 'expire_at is the type of "timestamp with time zone"');

  -- Check for Constraints
  select col_not_null('framethrower_hidden', 'issued_tokens', 'id', 'id has null constraint');
  select col_not_null('framethrower_hidden', 'issued_tokens', 'profile_id', 'profile_id has null constraint');
  select col_not_null('framethrower_hidden', 'issued_tokens', 'token', 'token has null constraint');
  select col_not_null('framethrower_hidden', 'issued_tokens', 'token_type', 'token_type has null constraint');
  select col_not_null('framethrower_hidden', 'issued_tokens', 'created_at', 'created_at has null constraint');
  select col_not_null('framethrower_hidden', 'issued_tokens', 'expire_at', 'expire_at has null constraint');


  -- Check inserts
  prepare
    insert_missing_profile_id as
    insert into framethrower_hidden.issued_tokens (token, token_type)
    values ('hello', 'refresh_token');

    select throws_ok('insert_missing_profile_id', 23502 ,null, 'inserting without a profile_id does fail');

  select * from finish();

rollback;