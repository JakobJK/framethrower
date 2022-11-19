-- Revert flipr:framethrower_public.table.feedback from pg

begin;

  drop table if exists framethrower_public.feedback_request;

commit;
