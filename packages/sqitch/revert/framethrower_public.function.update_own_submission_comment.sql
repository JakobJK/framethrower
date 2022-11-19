-- Revert framethrower:framethrower_public.function.update_own_submission_comment from pg

begin;

  drop function if exists framethrower_public.update_own_submission_comment(text, text, text);

commit;
