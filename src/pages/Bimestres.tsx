
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Bimestres = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      <Card className="max-w-6xl mx-auto border border-gray-400 shadow-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">Cronograma de Bloques/Bimestres</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <table className="w-full border-collapse border border-gray-400">
            <thead>
              <tr className="bg-[#d77e89] text-black font-bold">
                <th className="p-2 border border-gray-400 text-center">BLOQUE/BIMESTRES</th>
                <th className="p-2 border border-gray-400 text-center">INICIO</th>
                <th className="p-2 border border-gray-400 text-center">TÉRMINO</th>
                <th className="p-2 border border-gray-400 text-center">SEMANAS</th>
              </tr>
            </thead>
            <tbody className="text-sm text-black">
              <tr>
                <td className="p-2 border border-gray-400 font-bold text-left">
                  1° BLOQUE DE SEMANAS DE GESTIÓN
                </td>
                <td className="p-2 border border-gray-400 text-center">03/03/25</td>
                <td className="p-2 border border-gray-400 text-center">14/03/25</td>
                <td className="p-2 border border-gray-400 text-center"></td>
              </tr>
              <tr>
                <td colSpan={4} className="font-bold text-center border border-gray-400 text-black uppercase">
                  I BIMESTRE
                </td>
              </tr>
              <tr>
                <td rowSpan={3} className="p-2 border border-gray-400 font-bold text-left align-top">
                  1° BLOQUE DE SEMANAS LECTIVAS
                </td>
                <td className="p-2 border border-gray-400 text-center">17/03/25</td>
                <td className="p-2 border border-gray-400 text-center">04/04/25</td>
                <td className="p-2 border border-gray-400 text-center font-bold italic">3 semanas (diagnostico)</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-400 text-center">07/04/25</td>
                <td className="p-2 border border-gray-400 text-center">25/04/25</td>
                <td className="p-2 border border-gray-400 text-center font-bold">3 semanas</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-400 text-center">28/04/25</td>
                <td className="p-2 border border-gray-400 text-center">16/05/25</td>
                <td className="p-2 border border-gray-400 text-center font-bold">3 semanas</td>
              </tr>

              <tr>
                <td colSpan={4} className="font-bold text-center border border-gray-400 text-black uppercase">
                  II BIMESTRE
                </td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-400 font-bold text-left">2° BLOQUE DE GESTIÓN</td>
                <td className="p-2 border border-gray-400 text-center">19/05/25</td>
                <td className="p-2 border border-gray-400 text-center">23/05/25</td>
                <td className="p-2 border border-gray-400 text-center font-bold">1 semana</td>
              </tr>
              <tr>
                <td rowSpan={2} className="p-2 border border-gray-400 font-bold text-left align-top">
                  2° BLOQUE DE SEMANAS LECTIVAS
                </td>
                <td className="p-2 border border-gray-400 text-center">26/05/25</td>
                <td className="p-2 border border-gray-400 text-center">27/06/25</td>
                <td className="p-2 border border-gray-400 text-center font-bold">5 semanas</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-400 text-center">30/06/25</td>
                <td className="p-2 border border-gray-400 text-center">25/07/25</td>
                <td className="p-2 border border-gray-400 text-center font-bold">4 semanas</td>
              </tr>

              <tr>
                <td colSpan={4} className="font-bold text-center border border-gray-400 text-black uppercase">
                  TERCER BIMESTRE
                </td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-400 font-bold text-left">3ª BLOQUE DE SEMANAS DE GESTIÓN</td>
                <td className="p-2 border border-gray-400 text-center">30/07/25</td>
                <td className="p-2 border border-gray-400 text-center">08/08/25</td>
                <td className="p-2 border border-gray-400 text-center font-bold">2 semanas</td>
              </tr>
              <tr>
                <td rowSpan={2} className="p-2 border border-gray-400 font-bold text-left align-top">
                  3° BLOQUE DE SEMANAS LECTIVAS
                </td>
                <td className="p-2 border border-gray-400 text-center">11/08/25</td>
                <td className="p-2 border border-gray-400 text-center">05/09/25</td>
                <td className="p-2 border border-gray-400 text-center font-bold">4 semanas</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-400 text-center">08/09/25</td>
                <td className="p-2 border border-gray-400 text-center">10/10/25</td>
                <td className="p-2 border border-gray-400 text-center font-bold">5 semanas</td>
              </tr>

              <tr>
                <td colSpan={4} className="font-bold text-center border border-gray-400 text-black uppercase">
                  IV BIMESTRE
                </td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-400 font-bold text-left">4ª BLOQUE DE SEMANAS DE GESTIÓN</td>
                <td className="p-2 border border-gray-400 text-center">13/10/25</td>
                <td className="p-2 border border-gray-400 text-center">17/10/25</td>
                <td className="p-2 border border-gray-400 text-center font-bold">1 semana</td>
              </tr>
              <tr>
                <td rowSpan={3} className="p-2 border border-gray-400 font-bold text-left align-top">
                  4° BLOQUE DE SEMANAS LECTIVAS
                </td>
                <td className="p-2 border border-gray-400 text-center">20/10/25</td>
                <td className="p-2 border border-gray-400 text-center">14/11/25</td>
                <td className="p-2 border border-gray-400 text-center font-bold">4 Semanas</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-400 text-center">17/11/25</td>
                <td className="p-2 border border-gray-400 text-center">19/12/25</td>
                <td className="p-2 border border-gray-400 text-center font-bold">5 semanas</td>
              </tr>
              <tr>
                <td className="p-2 border border-gray-400 text-center">22/12/25</td>
                <td className="p-2 border border-gray-400 text-center">31/12/25</td>
                <td className="p-2 border border-gray-400 text-center font-bold">2 semanas</td>
              </tr>
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Bimestres;
