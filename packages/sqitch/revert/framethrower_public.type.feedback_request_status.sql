-- Revert flipr:framethrower_hidden.type.feedback_request_status from pg

begin;

  drop type framethrower_public.feedback_request_status;

commit;
