-- Revert flipr:framethrower_public.table.feedback_response from pg

begin;

  drop table if exists framethrower_public.feedback_response;

commit;
