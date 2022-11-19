-- Deploy framethrower:framethrower_public.function.admin_edit_instructor_status to pg

begin;

  create or replace function framethrower_public.admin_edit_instructor_status(
    instructor_status_ framethrower_public.instructor_status,
    profile_id_ uuid
    )returns framethrower_public.instructor as $$
      update framethrower_public.instructor
      set status = instructor_status_
      where instructor.profile_id = profile_id_
      returning *;
  $$ language sql security definer;
  grant execute on function framethrower_public.admin_edit_instructor_status(framethrower_public.instructor_status, uuid) to framethrower_admin;

commit;
