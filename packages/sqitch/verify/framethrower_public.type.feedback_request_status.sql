-- Verify flipr:framethrower_hidden.type.feedback_request_status on pg
begin;

  select 1/count(*) from pg_type where typname = 'feedback_request_status';

rollback;

