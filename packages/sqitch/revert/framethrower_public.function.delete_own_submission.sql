-- Revert framethrower:framethrower_public.function.delete_own_submission from pg

begin;

  drop function if exists framethrower_public.delete_own_submission(text);

commit;
