var srcIndex = JSON.parse('{\
"accesskit":["",[],["geometry.rs","lib.rs"]],\
"arrayvec":["",[],["array_string.rs","arrayvec.rs","arrayvec_impl.rs","char.rs","errors.rs","lib.rs","utils.rs"]],\
"bitflags":["",[],["external.rs","internal.rs","iter.rs","lib.rs","parser.rs","public.rs","traits.rs"]],\
"bytes":["",[["buf",[],["buf_impl.rs","buf_mut.rs","chain.rs","iter.rs","limit.rs","mod.rs","reader.rs","take.rs","uninit_slice.rs","vec_deque.rs","writer.rs"]],["fmt",[],["debug.rs","hex.rs","mod.rs"]]],["bytes.rs","bytes_mut.rs","lib.rs","loom.rs"]],\
"cfg_if":["",[],["lib.rs"]],\
"cgl":["",[],["cgl.rs","lib.rs"]],\
"core_foundation":["",[],["array.rs","attributed_string.rs","base.rs","boolean.rs","bundle.rs","characterset.rs","data.rs","date.rs","dictionary.rs","error.rs","filedescriptor.rs","lib.rs","mach_port.rs","number.rs","propertylist.rs","runloop.rs","set.rs","string.rs","timezone.rs","url.rs","uuid.rs"]],\
"core_foundation_sys":["",[],["array.rs","attributed_string.rs","base.rs","bundle.rs","characterset.rs","data.rs","date.rs","dictionary.rs","error.rs","filedescriptor.rs","lib.rs","mach_port.rs","messageport.rs","number.rs","propertylist.rs","runloop.rs","set.rs","string.rs","timezone.rs","url.rs","uuid.rs"]],\
"core_graphics":["",[],["base.rs","color.rs","color_space.rs","context.rs","data_provider.rs","display.rs","event.rs","event_source.rs","font.rs","geometry.rs","gradient.rs","image.rs","lib.rs","path.rs","private.rs","sys.rs","window.rs"]],\
"core_graphics_types":["",[],["base.rs","geometry.rs","lib.rs"]],\
"dispatch":["",[],["ffi.rs","group.rs","lib.rs","once.rs","queue.rs","sem.rs"]],\
"foreign_types":["",[],["lib.rs"]],\
"foreign_types_shared":["",[],["lib.rs"]],\
"gl":["",[],["lib.rs"]],\
"glutin":["",[["api",[["cgl",[],["appkit.rs","config.rs","context.rs","display.rs","mod.rs","surface.rs"]]],["mod.rs"]],["platform",[],["mod.rs"]]],["config.rs","context.rs","display.rs","error.rs","lib.rs","prelude.rs","surface.rs"]],\
"glutin_winit":["",[],["lib.rs","window.rs"]],\
"grid":["",[],["lib.rs"]],\
"instant":["",[],["lib.rs","native.rs"]],\
"interpolation":["",[],["ease.rs","lerp.rs","lib.rs"]],\
"kurbo":["",[],["affine.rs","arc.rs","bezpath.rs","circle.rs","common.rs","cubicbez.rs","ellipse.rs","fit.rs","insets.rs","lib.rs","line.rs","mindist.rs","offset.rs","param_curve.rs","point.rs","quadbez.rs","quadspline.rs","rect.rs","rounded_rect.rs","rounded_rect_radii.rs","shape.rs","simplify.rs","size.rs","svg.rs","translate_scale.rs","vec2.rs"]],\
"lazy_static":["",[],["inline_lazy.rs","lib.rs"]],\
"libc":["",[["unix",[["bsd",[["apple",[["b64",[["aarch64",[],["align.rs","mod.rs"]]],["mod.rs"]]],["long_array.rs","mod.rs"]]],["mod.rs"]]],["align.rs","mod.rs"]]],["fixed_width_ints.rs","lib.rs","macros.rs"]],\
"libloading":["",[["os",[["unix",[],["consts.rs","mod.rs"]]],["mod.rs"]]],["changelog.rs","error.rs","lib.rs","safe.rs","util.rs"]],\
"lock_api":["",[],["lib.rs","mutex.rs","remutex.rs","rwlock.rs"]],\
"log":["",[],["__private_api.rs","lib.rs","macros.rs"]],\
"mio":["",[["event",[],["event.rs","events.rs","mod.rs","source.rs"]],["net",[["tcp",[],["listener.rs","mod.rs","stream.rs"]],["uds",[],["datagram.rs","listener.rs","mod.rs","stream.rs"]]],["mod.rs","udp.rs"]],["sys",[["unix",[["selector",[],["kqueue.rs","mod.rs"]],["uds",[],["datagram.rs","listener.rs","mod.rs","socketaddr.rs","stream.rs"]]],["mod.rs","net.rs","pipe.rs","sourcefd.rs","tcp.rs","udp.rs","waker.rs"]]],["mod.rs"]]],["interest.rs","io_source.rs","lib.rs","macros.rs","poll.rs","token.rs","waker.rs"]],\
"num_cpus":["",[],["lib.rs"]],\
"num_traits":["",[["ops",[],["bytes.rs","checked.rs","euclid.rs","inv.rs","mod.rs","mul_add.rs","overflowing.rs","saturating.rs","wrapping.rs"]]],["bounds.rs","cast.rs","float.rs","identities.rs","int.rs","lib.rs","macros.rs","pow.rs","real.rs","sign.rs"]],\
"objc2":["",[["declare",[],["ivar.rs","ivar_drop.rs","ivar_forwarding_impls.rs"]],["foundation",[],["__ns_string.rs","array.rs","attributed_string.rs","bundle.rs","comparison_result.rs","copying.rs","data.rs","dictionary.rs","enumerator.rs","error.rs","exception.rs","geometry.rs","mod.rs","mutable_array.rs","mutable_attributed_string.rs","mutable_data.rs","mutable_dictionary.rs","mutable_set.rs","mutable_string.rs","number.rs","object.rs","process_info.rs","range.rs","set.rs","string.rs","thread.rs","uuid.rs","value.rs","zone.rs"]],["macros",[],["__rewrite_self_arg.rs","declare_class.rs","extern_class.rs","extern_methods.rs"]],["message",[["apple",[],["arm64.rs","mod.rs"]]],["mod.rs"]],["rc",[],["allocated.rs","autorelease.rs","id.rs","id_forwarding_impls.rs","id_traits.rs","mod.rs","ownership.rs","weak_id.rs"]]],["__macro_helpers.rs","cache.rs","class_type.rs","declare.rs","exception.rs","lib.rs","macros.rs","runtime.rs"]],\
"objc2_encode":["",[],["__bool.rs","encode.rs","encoding.rs","helper.rs","lib.rs","parse.rs","static_str.rs"]],\
"objc_sys":["",[],["class.rs","constants.rs","exception.rs","image_info.rs","lib.rs","message.rs","method.rs","object.rs","property.rs","protocol.rs","rc.rs","selector.rs","types.rs","various.rs"]],\
"once_cell":["",[],["imp_std.rs","lib.rs","race.rs"]],\
"parking_lot":["",[],["condvar.rs","deadlock.rs","elision.rs","fair_mutex.rs","lib.rs","mutex.rs","once.rs","raw_fair_mutex.rs","raw_mutex.rs","raw_rwlock.rs","remutex.rs","rwlock.rs","util.rs"]],\
"parking_lot_core":["",[["thread_parker",[],["mod.rs","unix.rs"]]],["lib.rs","parking_lot.rs","spinwait.rs","util.rs","word_lock.rs"]],\
"pin_project_lite":["",[],["lib.rs"]],\
"proc_macro2":["",[],["detection.rs","extra.rs","fallback.rs","lib.rs","marker.rs","parse.rs","rcvec.rs","wrapper.rs"]],\
"quote":["",[],["ext.rs","format.rs","ident_fragment.rs","lib.rs","runtime.rs","spanned.rs","to_tokens.rs"]],\
"raw_window_handle":["",[],["android.rs","appkit.rs","borrowed.rs","haiku.rs","lib.rs","redox.rs","uikit.rs","unix.rs","web.rs","windows.rs"]],\
"scopeguard":["",[],["lib.rs"]],\
"signal_hook_registry":["",[],["half_lock.rs","lib.rs"]],\
"skia_bindings":["",[],["defaults.rs","impls.rs","lib.rs"]],\
"skia_safe":["",[["codec",[],["_codec.rs","codec_animation.rs","decoders.rs","encoded_image_format.rs","encoded_origin.rs","pixmap_utils.rs"]],["core",[],["alpha_type.rs","annotation.rs","bbh_factory.rs","bitmap.rs","blend_mode.rs","blender.rs","blur_types.rs","canvas.rs","clip_op.rs","color.rs","color_filter.rs","color_space.rs","color_type.rs","contour_measure.rs","coverage_mode.rs","cubic_map.rs","data.rs","data_table.rs","deferred_display_list.rs","deferred_display_list_recorder.rs","document.rs","drawable.rs","flattenable.rs","font.rs","font_arguments.rs","font_metrics.rs","font_mgr.rs","font_parameters.rs","font_style.rs","font_types.rs","graphics.rs","image.rs","image_filter.rs","image_generator.rs","image_info.rs","m44.rs","mask_filter.rs","matrix.rs","mesh.rs","milestone.rs","paint.rs","path.rs","path_builder.rs","path_effect.rs","path_measure.rs","path_types.rs","path_utils.rs","picture.rs","picture_recorder.rs","pixel_ref.rs","pixmap.rs","point.rs","point3.rs","promise_image_texture.rs","raster_handle_allocator.rs","rect.rs","region.rs","rrect.rs","rsxform.rs","sampling_options.rs","scalar_.rs","shader.rs","size.rs","stroke_rec.rs","surface.rs","surface_characterization.rs","surface_props.rs","swizzle.rs","text_blob.rs","texture_compression_type.rs","tile_mode.rs","time.rs","trace_memory_dump.rs","typeface.rs","types.rs","un_pre_multiply.rs","vertices.rs","yuva_info.rs","yuva_pixmaps.rs"]],["docs",[],["pdf_document.rs"]],["effects",[],["_1d_path_effect.rs","_2d_path_effect.rs","blenders.rs","color_matrix.rs","color_matrix_filter.rs","corner_path_effect.rs","dash_path_effect.rs","discrete_path_effect.rs","gradient_shader.rs","high_contrast_filter.rs","image_filters.rs","luma_color_filter.rs","op_path_effect.rs","overdraw_color_filter.rs","perlin_noise_shader.rs","runtime_effect.rs","shader_mask_filter.rs","stroke_and_fill_path_effect.rs","table_color_filter.rs","trim_path_effect.rs"]],["encode_",[],["jpeg_encoder.rs","png_encoder.rs"]],["gpu",[["ganesh",[],["image_ganesh.rs","surface_ganesh.rs"]],["gl",[],["extensions.rs","interface.rs","types.rs"]]],["backend_drawable_info.rs","backend_surface.rs","backend_surface_mutable_state.rs","context_options.rs","direct_context.rs","driver_bug_workarounds.rs","ganesh.rs","gl.rs","gpu_types.rs","mutable_texture_state.rs","recording_context.rs","types.rs","yuva_backend_textures.rs"]],["interop",[],["cpp.rs","stream.rs","string.rs"]],["private",[],["safe32.rs"]],["svg",[],["canvas.rs"]],["utils",[],["camera.rs","custom_typeface.rs","null_canvas.rs","ordered_font_mgr.rs","parse_path.rs","shadow_utils.rs","text_utils.rs"]]],["codec.rs","core.rs","docs.rs","effects.rs","encode_.rs","gpu.rs","interop.rs","lib.rs","macros.rs","modules.rs","pathops.rs","prelude.rs","private.rs","svg.rs","utils.rs","wrapper.rs"]],\
"slotmap":["",[],["basic.rs","dense.rs","hop.rs","lib.rs","secondary.rs","sparse_secondary.rs"]],\
"smallvec":["",[],["lib.rs"]],\
"socket2":["",[["sys",[],["unix.rs"]]],["lib.rs","sockaddr.rs","socket.rs","sockref.rs"]],\
"syn":["",[["gen",[],["clone.rs","debug.rs","eq.rs","hash.rs","visit_mut.rs"]]],["attr.rs","bigint.rs","buffer.rs","custom_keyword.rs","custom_punctuation.rs","data.rs","derive.rs","discouraged.rs","drops.rs","error.rs","export.rs","expr.rs","ext.rs","file.rs","gen_helper.rs","generics.rs","group.rs","ident.rs","item.rs","lib.rs","lifetime.rs","lit.rs","lookahead.rs","mac.rs","macros.rs","meta.rs","op.rs","parse.rs","parse_macro_input.rs","parse_quote.rs","pat.rs","path.rs","print.rs","punctuated.rs","restriction.rs","sealed.rs","span.rs","spanned.rs","stmt.rs","thread.rs","token.rs","tt.rs","ty.rs","verbatim.rs","whitespace.rs"]],\
"taffy":["",[["compute",[["common",[],["alignment.rs","mod.rs"]],["grid",[["types",[],["cell_occupancy.rs","coordinates.rs","grid_item.rs","grid_track.rs","grid_track_counts.rs","mod.rs"]],["util",[],["mod.rs"]]],["alignment.rs","explicit_grid.rs","implicit_grid.rs","mod.rs","placement.rs","track_sizing.rs"]]],["flexbox.rs","leaf.rs","mod.rs"]],["style",[],["alignment.rs","dimension.rs","flex.rs","grid.rs","mod.rs"]]],["axis.rs","data.rs","debug.rs","error.rs","geometry.rs","layout.rs","lib.rs","math.rs","node.rs","prelude.rs","resolve.rs","style_helpers.rs","sys.rs","tree.rs"]],\
"tokio":["",[["fs",[],["canonicalize.rs","copy.rs","create_dir.rs","create_dir_all.rs","dir_builder.rs","file.rs","hard_link.rs","metadata.rs","mod.rs","open_options.rs","read.rs","read_dir.rs","read_link.rs","read_to_string.rs","remove_dir.rs","remove_dir_all.rs","remove_file.rs","rename.rs","set_permissions.rs","symlink.rs","symlink_metadata.rs","try_exists.rs","write.rs"]],["future",[],["block_on.rs","maybe_done.rs","mod.rs","poll_fn.rs","try_join.rs"]],["io",[["util",[],["async_buf_read_ext.rs","async_read_ext.rs","async_seek_ext.rs","async_write_ext.rs","buf_reader.rs","buf_stream.rs","buf_writer.rs","chain.rs","copy.rs","copy_bidirectional.rs","copy_buf.rs","empty.rs","fill_buf.rs","flush.rs","lines.rs","mem.rs","mod.rs","read.rs","read_buf.rs","read_exact.rs","read_int.rs","read_line.rs","read_to_end.rs","read_to_string.rs","read_until.rs","repeat.rs","shutdown.rs","sink.rs","split.rs","take.rs","vec_with_initialized.rs","write.rs","write_all.rs","write_all_buf.rs","write_buf.rs","write_int.rs","write_vectored.rs"]]],["async_buf_read.rs","async_fd.rs","async_read.rs","async_seek.rs","async_write.rs","blocking.rs","interest.rs","mod.rs","poll_evented.rs","read_buf.rs","ready.rs","seek.rs","split.rs","stderr.rs","stdin.rs","stdio_common.rs","stdout.rs"]],["loom",[["std",[],["atomic_u16.rs","atomic_u32.rs","atomic_u64.rs","atomic_u64_native.rs","atomic_usize.rs","barrier.rs","mod.rs","mutex.rs","parking_lot.rs","unsafe_cell.rs"]]],["mod.rs"]],["macros",[],["addr_of.rs","cfg.rs","join.rs","loom.rs","mod.rs","pin.rs","ready.rs","select.rs","support.rs","thread_local.rs","try_join.rs"]],["net",[["tcp",[],["listener.rs","mod.rs","socket.rs","split.rs","split_owned.rs","stream.rs"]],["unix",[["datagram",[],["mod.rs","socket.rs"]]],["listener.rs","mod.rs","pipe.rs","socketaddr.rs","split.rs","split_owned.rs","stream.rs","ucred.rs"]]],["addr.rs","lookup_host.rs","mod.rs","udp.rs"]],["process",[["unix",[],["mod.rs","orphan.rs","reap.rs"]]],["kill.rs","mod.rs"]],["runtime",[["blocking",[],["mod.rs","pool.rs","schedule.rs","shutdown.rs","task.rs"]],["context",[],["blocking.rs","current.rs","runtime.rs","runtime_mt.rs","scoped.rs"]],["io",[["driver",[],["signal.rs"]]],["driver.rs","metrics.rs","mod.rs","registration.rs","registration_set.rs","scheduled_io.rs"]],["metrics",[],["mock.rs","mod.rs"]],["scheduler",[["current_thread",[],["mod.rs"]],["inject",[],["pop.rs","rt_multi_thread.rs","shared.rs","synced.rs"]],["multi_thread",[["worker",[],["taskdump_mock.rs"]]],["counters.rs","handle.rs","idle.rs","mod.rs","overflow.rs","park.rs","queue.rs","stats.rs","trace_mock.rs","worker.rs"]]],["block_in_place.rs","defer.rs","inject.rs","lock.rs","mod.rs"]],["signal",[],["mod.rs"]],["task",[],["abort.rs","core.rs","error.rs","harness.rs","id.rs","join.rs","list.rs","mod.rs","raw.rs","state.rs","waker.rs"]],["time",[["wheel",[],["level.rs","mod.rs"]]],["entry.rs","handle.rs","mod.rs","source.rs"]]],["builder.rs","config.rs","context.rs","coop.rs","driver.rs","handle.rs","mod.rs","park.rs","process.rs","runtime.rs","thread_id.rs"]],["signal",[],["ctrl_c.rs","mod.rs","registry.rs","reusable_box.rs","unix.rs"]],["sync",[["mpsc",[],["block.rs","bounded.rs","chan.rs","error.rs","list.rs","mod.rs","unbounded.rs"]],["rwlock",[],["owned_read_guard.rs","owned_write_guard.rs","owned_write_guard_mapped.rs","read_guard.rs","write_guard.rs","write_guard_mapped.rs"]],["task",[],["atomic_waker.rs","mod.rs"]]],["barrier.rs","batch_semaphore.rs","broadcast.rs","mod.rs","mutex.rs","notify.rs","once_cell.rs","oneshot.rs","rwlock.rs","semaphore.rs","watch.rs"]],["task",[],["blocking.rs","join_set.rs","local.rs","mod.rs","spawn.rs","task_local.rs","unconstrained.rs","yield_now.rs"]],["time",[],["clock.rs","error.rs","instant.rs","interval.rs","mod.rs","sleep.rs","timeout.rs"]],["util",[["rand",[],["rt.rs"]]],["atomic_cell.rs","bit.rs","cacheline.rs","error.rs","idle_notified_set.rs","linked_list.rs","markers.rs","memchr.rs","mod.rs","once_cell.rs","rand.rs","rc_cell.rs","sync_wrapper.rs","trace.rs","try_lock.rs","wake.rs","wake_list.rs"]]],["blocking.rs","lib.rs"]],\
"tokio_macros":["",[],["entry.rs","lib.rs","select.rs"]],\
"unicode_ident":["",[],["lib.rs","tables.rs"]],\
"viewbuilder":["",[["tree",[],["iter.rs","iter_mut.rs","mod.rs","node_ref.rs"]]],["context.rs","element.rs","event.rs","lib.rs","node.rs","render.rs"]],\
"winit":["",[["platform",[],["macos.rs","mod.rs","run_return.rs"]],["platform_impl",[["macos",[["appkit",[],["appearance.rs","application.rs","button.rs","color.rs","control.rs","cursor.rs","event.rs","image.rs","menu.rs","menu_item.rs","mod.rs","pasteboard.rs","responder.rs","screen.rs","text_input_context.rs","version.rs","view.rs","window.rs"]],["util",[],["async.rs","mod.rs"]]],["app.rs","app_delegate.rs","app_state.rs","event.rs","event_loop.rs","ffi.rs","menu.rs","mod.rs","monitor.rs","observer.rs","view.rs","window.rs","window_delegate.rs"]]],["mod.rs"]]],["dpi.rs","error.rs","event.rs","event_loop.rs","icon.rs","lib.rs","monitor.rs","window.rs"]]\
}');
createSrcSidebar();
