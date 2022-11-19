
begin;

  select plan(10);
  select columns_are('framethrower_hidden', 'feature_flag', array[ 'id', 'name', 'status' ], 'id, name, and status are the columns');
  select col_is_pk('framethrower_hidden', 'feature_flag', 'id', 'id is the primary key');
  select col_type_is('framethrower_hidden', 'feature_flag', 'id', 'uuid', 'id is not the type of uuid');
  select col_type_is('framethrower_hidden', 'feature_flag', 'name', 'text', 'name is not the type of text');
  select col_type_is('framethrower_hidden', 'feature_flag', 'status', 'framethrower_hidden.feature_flag_status', 'status is not the type of text');
  select col_not_null('framethrower_hidden', 'feature_flag', 'id', 'id is not null');
  select col_not_null('framethrower_hidden', 'feature_flag', 'status', 'status is not null');

  prepare insert_feature_flag_name_only as insert into framethrower_hidden.feature_flag (name) values ('job_board');
  select lives_ok('insert_feature_flag_name_only', 'can insert only value with name');


  prepare insert_feature_flag_name_and_status as insert into framethrower_hidden.feature_flag (name, status) values ('job_board', 'active');
  select lives_ok('insert_feature_flag_name_and_status', 'can insert only value with name');

  prepare insert_missing_name as insert into framethrower_hidden.feature_flag (status) values ('active');
  SELECT throws_ok('insert_missing_name', 23502, null , 'Inserting without a name does fail');

  select * from finish();

rollback;