-- Verify flipr:framethrower_hidden.type.feedback_response_status on pg

begin;

  select 1/count(*) from pg_type where typname = 'feedback_response_status';

rollback;

