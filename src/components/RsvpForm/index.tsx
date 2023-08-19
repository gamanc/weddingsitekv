import { RSVPFormData } from "@/interfaces/RsvpTypes";
import React from "react";
import { useForm, Controller } from "react-hook-form";

interface Props {
  guestKey: string;
  maxAdults: number;
  maxKids: number;
  onSubmit: (data: RSVPFormData) => void;
}

const RSVPForm = ({ maxAdults, maxKids, onSubmit }: Props) => {
  const { handleSubmit, control, watch } = useForm<RSVPFormData>({
    defaultValues: {
      willAttend: "",
      confirmedAdults: 0,
      confirmedKids: 0,
      message: "",
    },
  });

  const willAttend = watch("willAttend");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Asistiras?</label>
        <div>
          <Controller
            name="willAttend"
            control={control}
            render={({ field }) => (
              <>
                <label>
                  <input
                    type="radio"
                    {...field}
                    value="yes"
                    checked={field.value === "yes"}
                  />
                  Sí
                </label>
                <label>
                  <input
                    type="radio"
                    {...field}
                    value="no"
                    checked={field.value === "no"}
                  />
                  No
                </label>
              </>
            )}
          />
        </div>
      </div>
      {willAttend === "yes" && (
        <>
          <div>
            <label>Adultos:</label>
            <Controller
              name="confirmedAdults"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <select {...field}>
                  {Array.from({ length: maxAdults + 1 }, (_, index) => (
                    <option key={index} value={index}>
                      {index}
                    </option>
                  ))}
                </select>
              )}
            />
          </div>
          <div>
            <label>Niños:</label>
            <Controller
              name="confirmedKids"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <select {...field}>
                  {Array.from({ length: maxKids + 1 }, (_, index) => (
                    <option key={index} value={index}>
                      {index}
                    </option>
                  ))}
                </select>
              )}
            />
          </div>
          <div>
            <label>Déjanos un mensaje! (opcional):</label>
            <Controller
              name="message"
              control={control}
              render={({ field }) => <textarea {...field} maxLength={300} />}
            />
          </div>
        </>
      )}
      <div>
        <button type="submit" disabled={!willAttend}>
          Enviar
        </button>
      </div>
    </form>
  );
};

export default RSVPForm;
