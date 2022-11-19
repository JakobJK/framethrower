-- Revert flipr:framethrower_hidden.type.feedback_status from pg

begin;

  drop type framethrower_public.feedback_response_status;

commit;
