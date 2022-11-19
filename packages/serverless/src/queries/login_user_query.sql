select
  framethrower_public.profile_premium_type(profile.*) as premium_type,
  premium_definition.max_frames,
  premium_definition.daily_posts,
  framethrower_public.profile_can_submit(profile.*) as can_submit,
  premium_definition.concurrent_projects,
  framethrower_public.profile_get_built_in_feedback(profile.*) as built_in_feedback,
  framethrower_public.profile_is_instructor(profile.*) as is_instructor,
  profile.username,
  profile.role,
  profile_id from framethrower_public.profile
  join framethrower_private.profile_secrets ON profile_secrets.profile_id = profile.id
  join framethrower_public.premium_definition ON premium_definition.name = framethrower_public.profile_premium_type(profile.*) where profile_secrets.framethrower_serial_key = $1