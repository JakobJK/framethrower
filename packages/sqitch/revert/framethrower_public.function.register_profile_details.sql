-- Revert flipr:framethrower_public.function.register_profile_details from pg

begin;

  drop function if exists framethrower_public.register_profile_details(text, text, text, text, text);

commit;
